import { useState, useEffect, useCallback, useMemo } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { updateDoc, doc, collection, query, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';
import { Login } from './components/Login';
import { StudentDashboard } from './components/StudentDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { StaffDashboard } from './components/StaffDashboard';
import { RequestDetails } from './components/RequestDetails';

export interface ServiceRequest {
  id: string;
  // Human-friendly ticket number shown in the UI (e.g. REQ-20260319-123)
  ticketNumber?: string;
  category: string;
  description: string;
  location: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  studentName: string;
  studentId: string;
  dateSubmitted: string;
  assignedTo?: string;
  imageUrl?: string; // Optional image URL from Firebase Storage
  statusUpdates: Array<{
    status: string;
    timestamp: string;
    note: string;
  }>;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string; id: string } | null>(null);
  const [currentView, setCurrentView] = useState<'login' | 'student-dashboard' | 'admin-dashboard' | 'staff-dashboard' | 'request-details'>('login');
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [requestsLoading, setRequestsLoading] = useState(false);

  // ✅ OPTIMIZATION #1: Efficient Firestore data fetch with real-time listener
  // Uses onSnapshot for real-time sync instead of manual polling
  useEffect(() => {
    setRequestsLoading(true);
    try {
      const requestsQuery = query(collection(db, 'service_requests'));
      const unsubscribe = onSnapshot(
        requestsQuery,
        (snapshot) => {
          const firestoreRequests: ServiceRequest[] = snapshot.docs.map((doc) => {
            const data = doc.data();
            const baseDate = typeof data.dateSubmitted === 'string' ? data.dateSubmitted : undefined;
            const fallbackCode = baseDate
              ? `REQ-${baseDate.slice(0, 10).replace(/-/g, '')}-${doc.id.slice(0, 4).toUpperCase()}`
              : `REQ-${doc.id.slice(0, 6).toUpperCase()}`;

            return {
              id: doc.id,
              ticketNumber: data.ticketNumber || fallbackCode,
              category: data.category || '',
              description: data.description || '',
              location: data.location || '',
              status: data.status || 'Pending',
              studentName: data.studentName || '',
              studentId: data.studentId || '',
              dateSubmitted: data.dateSubmitted || '',
              assignedTo: data.assignedTo,
              imageUrl: data.imageUrl,
              statusUpdates: data.statusUpdates || []
            };
          });
          setRequests(firestoreRequests);
          setRequestsLoading(false);
          console.log('✓ Loaded requests from Firestore:', firestoreRequests.length);
        },
        (error) => {
          console.error('Error fetching requests:', error);
          setRequestsLoading(false);
        }
      );
      return unsubscribe; // Cleanup listener on unmount
    } catch (error) {
      console.error('Error setting up Firestore listener:', error);
      setRequestsLoading(false);
    }
  }, []);

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is logged in - keep user state from local state (set by handleLogin)
        // Don't automatically set user here - let handleLogin manage it
        setAuthLoading(false);
      } else {
        // User is logged out
        setCurrentUser(null);
        setCurrentView('login');
        setSelectedRequestId(null);
        setAuthLoading(false);
      }
    });

    return unsubscribe;
  }, []);
  
  // ✅ OPTIMIZATION #2: Memoize callbacks to prevent unnecessary re-renders of child components
  const handleLogin = useCallback((name: string, role: string, id: string) => {
    setCurrentUser({ name, role, id });
    if (role === 'Admin') {
      setCurrentView('admin-dashboard');
    } else if (role === 'Staff' || role === 'Technician') {
      setCurrentView('staff-dashboard');
    } else {
      setCurrentView('student-dashboard');
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setCurrentView('login');
      setSelectedRequestId(null);
      setRequests([]);
      localStorage.clear();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  const handleAddRequest = useCallback((request: Omit<ServiceRequest, 'id' | 'status' | 'dateSubmitted' | 'statusUpdates'>) => {
    const ticketNumber = `REQ${String(requests.length + 1).padStart(3, '0')}`;
    const newRequest: ServiceRequest = {
      ...request,
      id: ticketNumber,
      ticketNumber,
      status: 'Pending',
      dateSubmitted: new Date().toISOString().split('T')[0],
      statusUpdates: [
        {
          status: 'Pending',
          timestamp: new Date().toLocaleString(),
          note: 'Request submitted'
        }
      ]
    };
    setRequests([newRequest, ...requests]);
  }, [requests]);

  const handleUpdateRequest = useCallback(async (id: string, updates: Partial<ServiceRequest>) => {
    // 1. Update local state immediately (optimistic update) using functional setState
    setRequests(prevRequests =>
      prevRequests.map(req => {
        if (req.id === id) {
          const updatedRequest = { ...req, ...updates };
          if (updates.status && updates.status !== req.status) {
            updatedRequest.statusUpdates = [
              ...req.statusUpdates,
              {
                status: updates.status,
                timestamp: new Date().toLocaleString(),
                note: `Status updated to ${updates.status}`
              }
            ];
          }
          return updatedRequest;
        }
        return req;
      })
    );

    // 2. Persist to Firestore
    try {
      const updateData: Record<string, any> = {
        updatedAt: new Date()
      };

      // Only include provided fields
      if (updates.status) updateData.status = updates.status;
      if (updates.assignedTo !== undefined) updateData.assignedTo = updates.assignedTo;
      if (updates.statusUpdates) updateData.statusUpdates = updates.statusUpdates;

      await updateDoc(doc(db, 'service_requests', id), updateData);
      console.log(`✓ Request ${id} updated in Firestore`);
    } catch (error) {
      console.error('Failed to persist update to Firestore:', error);
    }
  }, []);

  const handleViewDetails = useCallback((id: string) => {
    setSelectedRequestId(id);
    setCurrentView('request-details');
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setSelectedRequestId(null);
    if (currentUser?.role === 'Admin') {
      setCurrentView('admin-dashboard');
    } else if (currentUser?.role === 'Staff' || currentUser?.role === 'Technician') {
      setCurrentView('staff-dashboard');
    } else {
      setCurrentView('student-dashboard');
    }
  }, [currentUser?.role]);

  // ✅ OPTIMIZATION #3: Memoize student-filtered requests to avoid recalculating on every render
  const studentRequests = useMemo(
    () => requests.filter(req => currentUser && req.studentId === currentUser.id),
    [requests, currentUser?.id]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {authLoading || requestsLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          {currentView === 'login' && (
            <Login onLogin={handleLogin} />
          )}
          
          {currentView === 'student-dashboard' && currentUser && (
            <StudentDashboard
              user={currentUser}
              requests={studentRequests}
              onAddRequest={handleAddRequest}
              onViewDetails={handleViewDetails}
              onLogout={handleLogout}
            />
          )}
          
          {currentView === 'admin-dashboard' && currentUser && (
            <AdminDashboard
              user={currentUser}
              requests={requests}
              onUpdateRequest={handleUpdateRequest}
              onViewDetails={handleViewDetails}
              onLogout={handleLogout}
            />
          )}
          
          {currentView === 'staff-dashboard' && currentUser && (
            <StaffDashboard
              user={currentUser}
              requests={requests}
              onUpdateRequest={handleUpdateRequest}
              onViewDetails={handleViewDetails}
              onLogout={handleLogout}
            />
          )}
          
          {currentView === 'request-details' && selectedRequestId && (
            <RequestDetails
              request={requests.find(req => req.id === selectedRequestId)}
              onBack={handleBackToDashboard}
              isAdmin={currentUser?.role === 'Admin'}
              onUpdateRequest={handleUpdateRequest}
            />
          )}
        </>
      )}
    </div>
  );
}
