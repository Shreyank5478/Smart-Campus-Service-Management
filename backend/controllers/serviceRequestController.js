// ============================================
// SERVICE REQUEST CONTROLLER
// Handles business logic for service requests
// ============================================

import ServiceRequest from '../models/ServiceRequest.js';
import { asyncHandler, ApiError } from '../middlewares/errorHandler.js';
import { HTTP_STATUS } from '../config/constants.js';

/**
 * Create a new service request
 * @route POST /api/requests
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
export const createRequest = asyncHandler(async (req, res) => {
  const { description, location, category, studentId } = req.body;

  // Create request
  const request = await ServiceRequest.create({
    description,
    location,
    category,
    studentId,
    status: 'Pending'
  });

  res.status(HTTP_STATUS.CREATED).json({
    success: true,
    message: 'Service request created successfully',
    data: request
  });
});

/**
 * Get all service requests
 * @route GET /api/requests
 * @query {string} status - Filter by status
 * @query {string} studentId - Filter by student
 */
export const getAllRequests = asyncHandler(async (req, res) => {
  const { status, studentId, assignedTo } = req.query;

  const filters = {};
  if (status) filters.status = status;
  if (studentId) filters.studentId = studentId;
  if (assignedTo) filters.assignedTo = assignedTo;

  const requests = await ServiceRequest.getAll(filters);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: requests.length,
    data: requests
  });
});

/**
 * Get a single service request
 * @route GET /api/requests/:id
 * @param {string} id - Request ID
 */
export const getRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const request = await ServiceRequest.getById(id);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: request
  });
});

/**
 * Update a service request
 * @route PUT /api/requests/:id
 * @param {string} id - Request ID
 */
export const updateRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  // Don't allow direct status change through update
  delete updateData.status;

  const request = await ServiceRequest.update(id, updateData);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Service request updated successfully',
    data: request
  });
});

/**
 * Delete a service request
 * @route DELETE /api/requests/:id
 * @param {string} id - Request ID
 */
export const deleteRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await ServiceRequest.delete(id);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Service request deleted successfully'
  });
});

/**
 * Assign request to staff member
 * @route PUT /api/requests/:id/assign
 * @param {string} id - Request ID
 * @body {string} staffId - Staff member ID
 */
export const assignRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { staffId } = req.body;

  if (!staffId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Staff ID is required');
  }

  const request = await ServiceRequest.assignToStaff(id, staffId);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Request assigned successfully',
    data: request
  });
});

/**
 * Mark request as resolved
 * @route PUT /api/requests/:id/resolve
 * @param {string} id - Request ID
 * @body {string} notes - Resolution notes (optional)
 */
export const resolveRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { notes = '' } = req.body;

  const request = await ServiceRequest.resolve(id, notes);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'Request marked as resolved',
    data: request
  });
});

/**
 * Get requests by student
 * @route GET /api/requests/student/:studentId
 * @param {string} studentId - Student ID
 */
export const getStudentRequests = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  const requests = await ServiceRequest.getByStudent(studentId);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: requests.length,
    data: requests
  });
});

/**
 * Get requests assigned to staff
 * @route GET /api/requests/assigned/:staffId
 * @param {string} staffId - Staff ID
 */
export const getStaffAssignments = asyncHandler(async (req, res) => {
  const { staffId } = req.params;

  const requests = await ServiceRequest.getAssignedToStaff(staffId);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: requests.length,
    data: requests
  });
});

/**
 * Get statistics
 * @route GET /api/requests/stats/overview
 */
export const getRequestStats = asyncHandler(async (req, res) => {
  const stats = await ServiceRequest.getStatusCounts();
  const total = stats.pending + stats.inProgress + stats.resolved;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: {
      ...stats,
      total
    }
  });
});
