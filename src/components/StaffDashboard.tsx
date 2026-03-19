import { useState, useCallback, useMemo, memo } from 'react';
import { LogOut, User, Clock, CheckCircle, AlertCircle, X, MessageSquare, FileText, Wrench } from 'lucide-react';
import type { ServiceRequest } from '../App';

interface StaffDashboardProps {
  user: { name: string; role: string; id: string };
  requests: ServiceRequest[];
  onUpdateRequest: (id: string, updates: Partial<ServiceRequest>) => void;
  onViewDetails: (id: string) => void;
  onLogout: () => void;
}

interface ResolveModalData {
  requestId: string;
  description: string;
}

export const StaffDashboard = memo(({ user, requests, onUpdateRequest, onViewDetails, onLogout }: StaffDashboardProps) => {
  const [updating, setUpdating] = useState<string | null>(null);
  const [resolveModal, setResolveModal] = useState<ResolveModalData | null>(null);
  const [resolveNote, setResolveNote] = useState('');

  const myRequests = useMemo(() => requests.filter(req => req.assignedTo === user.name), [requests, user.name]);
  const unassignedRequests = useMemo(() => requests.filter(req => !req.assignedTo && req.status !== 'Resolved'), [requests]);

  const getStatusColor = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'Pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'In Progress': return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'Resolved': return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return null;
    }
  };

  const handleStatusUpdate = useCallback(async (requestId: string, newStatus: 'In Progress' | 'Resolved', note: string) => {
    setUpdating(requestId);
    try {
      const existingRequest = requests.find(r => r.id === requestId);
      if (!existingRequest) { setUpdating(null); return; }
      const timestamp = new Date().toLocaleString();
      onUpdateRequest(requestId, {
        status: newStatus,
        statusUpdates: [...(existingRequest.statusUpdates || []), { status: newStatus, timestamp, note }]
      });
      setResolveModal(null);
      setResolveNote('');
    } catch (err) {
      console.error('Error updating request:', err);
    }
    setUpdating(null);
  }, [requests, onUpdateRequest]);

  const handlePickUpTask = useCallback(async (requestId: string) => {
    setUpdating(requestId);
    try {
      const currentRequest = requests.find(r => r.id === requestId);
      const timestamp = new Date().toLocaleString();
      onUpdateRequest(requestId, {
        assignedTo: user.name,
        status: 'In Progress',
        statusUpdates: [
          ...(currentRequest?.statusUpdates || []),
          { status: 'In Progress', timestamp, note: `Picked up by ${user.name}` }
        ]
      });
    } catch (err) {
      console.error('Error picking up task:', err);
    }
    setUpdating(null);
  }, [requests, user.name, onUpdateRequest]);

  const openResolveModal = useCallback((request: ServiceRequest) => {
    setResolveModal({ requestId: request.id, description: request.description });
    setResolveNote('');
  }, []);

  const handleResolveSubmit = useCallback(() => {
    if (resolveModal && resolveNote.trim()) {
      handleStatusUpdate(resolveModal.requestId, 'Resolved', resolveNote);
    }
  }, [resolveModal, resolveNote, handleStatusUpdate]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ── matches Admin/Student exactly */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Smart Campus - Staff Panel</h1>
                <p className="text-sm text-gray-500">Service Request Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
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

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Stats Cards ── 4-column grid matching Admin style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">My Tasks</p>
                <p className="text-3xl font-bold text-gray-900">{myRequests.length}</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">In Progress</p>
                <p className="text-3xl font-bold text-blue-600">
                  {myRequests.filter(r => r.status === 'In Progress').length}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">Resolved</p>
                <p className="text-3xl font-bold text-green-600">
                  {myRequests.filter(r => r.status === 'Resolved').length}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">Available</p>
                <p className="text-3xl font-bold text-yellow-500">{unassignedRequests.length}</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Available Tasks Table ── */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Available Tasks</h2>
              <p className="text-sm text-gray-500">Unassigned requests you can pick up</p>
            </div>
            <span className="text-sm text-gray-500">{unassignedRequests.length} available</span>
          </div>

          {unassignedRequests.length === 0 ? (
            <div className="px-6 py-10 text-center text-gray-500 text-sm">
              All requests are currently assigned.
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {unassignedRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-500">{request.ticketNumber ?? request.id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{request.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{request.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{request.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{request.dateSubmitted}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handlePickUpTask(request.id)}
                        disabled={updating === request.id}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 font-medium text-sm"
                      >
                        {updating === request.id ? 'Picking Up...' : 'Pick Up'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ── My Tasks Table ── */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
              <p className="text-sm text-gray-500">Requests currently assigned to you</p>
            </div>
            <span className="text-sm text-gray-500">{myRequests.length} tasks</span>
          </div>

          {myRequests.length === 0 ? (
            <div className="px-6 py-10 text-center text-gray-500 text-sm">
              No tasks assigned to you yet.
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-500">{request.ticketNumber ?? request.id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{request.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{request.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{request.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {getStatusIcon(request.status)}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {request.status === 'Pending' && (
                        <button
                          onClick={() => handleStatusUpdate(request.id, 'In Progress', 'Started working')}
                          disabled={updating === request.id}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 font-medium text-sm"
                        >
                          {updating === request.id ? 'Starting...' : 'Start Work'}
                        </button>
                      )}
                      {request.status === 'In Progress' && (
                        <button
                          onClick={() => openResolveModal(request)}
                          disabled={updating === request.id}
                          className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 font-medium text-sm"
                        >
                          {updating === request.id ? 'Completing...' : 'Mark Complete'}
                        </button>
                      )}
                      {request.status === 'Resolved' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                          <CheckCircle className="w-3.5 h-3.5" /> Done
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* ── Resolve Modal ── */}
      {resolveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Complete Task</h2>
              <button onClick={() => setResolveModal(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 rounded p-3 mb-4">
                <p className="text-sm text-gray-600">Task: {resolveModal.description}</p>
              </div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Completion Note *
              </label>
              <textarea
                value={resolveNote}
                onChange={(e) => setResolveNote(e.target.value)}
                placeholder="Describe what was done to resolve this issue..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">This note will be visible to the student and admin</p>
            </div>
            <div className="flex gap-3 p-4 border-t">
              <button
                onClick={() => setResolveModal(null)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleResolveSubmit}
                disabled={!resolveNote.trim()}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
              >
                Mark Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
