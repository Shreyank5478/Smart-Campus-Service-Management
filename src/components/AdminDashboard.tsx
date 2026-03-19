import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { LogOut, User, FileText, Filter, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { UserManagement } from './UserManagement';
import { db } from '../firebase';
import { collection, getDocs, DocumentData, QuerySnapshot } from 'firebase/firestore';
import type { ServiceRequest } from '../App';

interface StaffMember extends DocumentData {
  id: string;
  name: string;
  role: string;
}

interface AdminDashboardProps {
  user: { name: string; role: string; id: string };
  requests: ServiceRequest[];
  onUpdateRequest: (id: string, updates: Partial<ServiceRequest>) => void;
  onViewDetails: (id: string) => void;
  onLogout: () => void;
}

// ✅ OPTIMIZATION: Memoize component to prevent unnecessary re-renders when props haven't changed
export const AdminDashboard = memo(({ user, requests, onUpdateRequest, onViewDetails, onLogout }: AdminDashboardProps) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);

  // ✅ FIX #2: Use requests from props (single source of truth from App.tsx)
  // No longer fetching requests here - prevents dual data source issue

  // ✅ OPTIMIZATION: Fetch staff only once on mount, not on every showUserManagement change
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersDocs: QuerySnapshot<DocumentData> = await getDocs(usersCollection);
        const staff: StaffMember[] = usersDocs.docs
          .map(docSnap => ({
            id: docSnap.id,
            ...docSnap.data()
          } as StaffMember))
          .filter((u) => u.role === 'Staff' || u.role === 'Technician');
        
        setStaffMembers(staff);
        console.log('Loaded staff members:', staff);
      } catch (error) {
        console.error('Error fetching staff:', error);
        setStaffMembers([]);
      }
    };

    fetchStaff();
  }, []); // Empty dependency - fetch once on mount

  const categories = useMemo(() => ['All', 'Electrical', 'Internet', 'Hostel', 'Classroom', 'Plumbing', 'Other'], []);
  const statuses = useMemo(() => ['All', 'Pending', 'In Progress', 'Resolved'], []);

  // ✅ OPTIMIZATION: Memoize filtered requests to avoid recalculating on every render
  const filteredRequests = useMemo(() => 
    requests.filter((request) => {
      const statusMatch = filterStatus === 'All' || request.status === filterStatus;
      const categoryMatch = filterCategory === 'All' || request.category === filterCategory;
      return statusMatch && categoryMatch;
    }),
    [requests, filterStatus, filterCategory]
  );

  const handleAssignTo = useCallback((requestId: string, staffName: string) => {
    onUpdateRequest(requestId, { assignedTo: staffName });
  }, [onUpdateRequest]);

  const getStatusIcon = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'Pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'In Progress':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'Resolved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Smart Campus - Admin Panel</h1>
                <p className="text-sm text-gray-500">Service Request Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowUserManagement(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg transition-colors font-medium text-sm"
              >
                <Users className="w-5 h-5" />
                <span>Manage Users</span>
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                <User className="w-5 h-5 text-blue-600" />
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">Total Requests</p>
                <p className="text-3xl font-bold text-gray-900">{requests.length}</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {requests.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">In Progress</p>
                <p className="text-3xl font-bold text-blue-600">
                  {requests.filter(r => r.status === 'In Progress').length}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">Resolved</p>
                <p className="text-3xl font-bold text-green-600">
                  {requests.filter(r => r.status === 'Resolved').length}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Filters</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">
              All Service Requests ({filteredRequests.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assign To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono text-gray-900">{request.ticketNumber ?? request.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{request.studentName}</p>
                        <p className="text-xs text-gray-500">{request.studentId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {request.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 max-w-xs truncate">{request.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{request.location}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {request.imageUrl ? (
                        <img
                          src={request.imageUrl}
                          alt="Request"
                          loading="lazy"
                          className="w-12 h-12 object-cover rounded border border-gray-200 cursor-pointer hover:opacity-80"
                          onClick={() => onViewDetails(request.id)}
                        />
                      ) : (
                        <span className="text-xs text-gray-500">No image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={request.assignedTo || ''}
                        onChange={(e) => handleAssignTo(request.id, e.target.value)}
                        className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value="">Unassigned</option>
                        {staffMembers.map((staff) => (
                          <option key={staff.id} value={staff.name}>
                            {staff.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => onViewDetails(request.id)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredRequests.length === 0 && (
              <div className="px-6 py-12 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No requests found</p>
                <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* User Management Modal */}
      {showUserManagement && (
        <UserManagement onClose={() => setShowUserManagement(false)} />
      )}
    </div>
  );
});
