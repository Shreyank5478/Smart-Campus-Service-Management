import { memo, useCallback, useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, User, Tag, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { ServiceRequest } from '../App';

interface RequestDetailsProps {
  request: ServiceRequest | undefined;
  onBack: () => void;
  isAdmin: boolean;
  onUpdateRequest: (id: string, updates: Partial<ServiceRequest>) => void;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
}

export const RequestDetails = memo(({ request, onBack, isAdmin, onUpdateRequest }: RequestDetailsProps) => {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);

  // Fetch real staff/technician users from Firestore (only when Admin is viewing)
  useEffect(() => {
    if (!isAdmin) return;
    const fetchStaff = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'users'));
        const staff: StaffMember[] = snapshot.docs
          .map(doc => ({ id: doc.id, ...(doc.data() as { name: string; role: string }) }))
          .filter(u => u.role === 'Staff' || u.role === 'Technician');
        setStaffMembers(staff);
      } catch (err) {
        console.error('Failed to load staff list:', err);
      }
    };
    fetchStaff();
  }, [isAdmin]);

  // ✅ OPTIMIZATION: Memoize status update handlers
  const handleStatusChange = useCallback((status: 'Pending' | 'In Progress' | 'Resolved') => {
    if (request) {
      onUpdateRequest(request.id, { status });
    }
  }, [request, onUpdateRequest]);

  // Handle case where request is not found
  if (!request) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Request Not Found</h2>
          <p className="text-gray-600 mb-4">The request you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={onBack}
            className="flex items-center gap-2 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 text-base"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Dashboard</span>
          </button>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Request Details</h1>
              <p className="text-sm text-gray-500">Request ID: {request.ticketNumber ?? request.id}</p>
            </div>
            <span className={`px-4 py-2 rounded-lg text-sm font-medium border whitespace-nowrap ${getStatusColor(request.status)}`}>
              {request.status}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="col-span-2 space-y-6">
            {/* Request Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Request Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium inline-block">
                      {request.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-sm text-gray-900 break-words">{request.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-gray-600 mb-1">Date Submitted</p>
                    <p className="text-sm text-gray-900">
                      {new Date(request.dateSubmitted).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Description</p>
                  <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap break-words">{request.description}</p>
                </div>
              </div>
            </div>

            {/* Attached Image */}
            {request.imageUrl && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Attached Image</h2>
                <img
                  src={request.imageUrl}
                  alt="Request"
                  loading="lazy"
                  className="w-full h-auto rounded-lg border border-gray-200 object-cover max-h-96"
                />
              </div>
            )}

            {/* Status Updates Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Updates</h2>
              
              <div className="space-y-4">
                {request.statusUpdates.map((update, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        update.status === 'Resolved' ? 'bg-green-100' :
                        update.status === 'In Progress' ? 'bg-blue-100' :
                        'bg-yellow-100'
                      }`}>
                        {update.status === 'Resolved' && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {update.status === 'In Progress' && <AlertCircle className="w-4 h-4 text-blue-600" />}
                        {update.status === 'Pending' && <Clock className="w-4 h-4 text-yellow-600" />}
                      </div>
                      {index < request.statusUpdates.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">{update.status}</span>
                        <span className="text-xs text-gray-500">{update.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 break-words">{update.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{request.studentName}</p>
                    <p className="text-xs text-gray-500 truncate">{request.studentId}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment Information */}
            {isAdmin && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Assignment</h2>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assigned To
                    </label>
                    <select
                      value={request.assignedTo || ''}
                      onChange={(e) => onUpdateRequest(request.id, { assignedTo: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                    >
                      <option value="">Unassigned</option>
                      {staffMembers.length === 0 ? (
                        <option disabled>Loading staff...</option>
                      ) : (
                        staffMembers.map(staff => (
                          <option key={staff.id} value={staff.name}>
                            {staff.name} ({staff.role})
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  {request.assignedTo && (
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2">Currently assigned to:</p>
                      <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                        <User className="w-4 h-4 text-blue-600" />
                        <p className="text-sm font-medium text-blue-900">{request.assignedTo}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Status Update (Admin Only) */}
            {isAdmin && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Update Status</h2>
                
                <div className="space-y-3">
                  <button
                    onClick={() => handleStatusChange('Pending')}
                    disabled={request.status === 'Pending'}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Clock className="w-4 h-4" />
                    Mark as Pending
                  </button>
                  
                  <button
                    onClick={() => handleStatusChange('In Progress')}
                    disabled={request.status === 'In Progress'}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Mark as In Progress
                  </button>
                  
                  <button
                    onClick={() => handleStatusChange('Resolved')}
                    disabled={request.status === 'Resolved'}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark as Resolved
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
});
