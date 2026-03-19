// ============================================
// SERVICE REQUEST ROUTES
// All routes for service request endpoints
// ============================================

import express from 'express';
import * as controller from '../controllers/serviceRequestController.js';
import { validateServiceRequest, validateStatusUpdate, sanitizeInputs } from '../middlewares/validation.js';
import { asyncHandler } from '../middlewares/errorHandler.js';

const router = express.Router();

/**
 * POST /api/requests
 * Create a new service request
 * Body: { description, location, category, studentId }
 */
router.post('/', sanitizeInputs, validateServiceRequest, controller.createRequest);

/**
 * GET /api/requests
 * Get all service requests (with optional filters)
 * Query: ?status=Pending&studentId=xxx&assignedTo=xxx
 */
router.get('/', controller.getAllRequests);

/**
 * GET /api/requests/:id
 * Get a single service request
 */
router.get('/:id', controller.getRequest);

/**
 * PUT /api/requests/:id
 * Update a service request
 * Body: { description, location, category }
 */
router.put('/:id', sanitizeInputs, controller.updateRequest);

/**
 * DELETE /api/requests/:id
 * Delete a service request
 */
router.delete('/:id', controller.deleteRequest);

/**
 * PUT /api/requests/:id/assign
 * Assign request to staff member
 * Body: { staffId }
 */
router.put('/:id/assign', controller.assignRequest);

/**
 * PUT /api/requests/:id/resolve
 * Mark request as resolved
 * Body: { notes (optional) }
 */
router.put('/:id/resolve', validateStatusUpdate, controller.resolveRequest);

/**
 * GET /api/requests/student/:studentId
 * Get all requests by student
 */
router.get('/student/:studentId', controller.getStudentRequests);

/**
 * GET /api/requests/assigned/:staffId
 * Get all requests assigned to staff member
 */
router.get('/assigned/:staffId', controller.getStaffAssignments);

/**
 * GET /api/requests/stats/overview
 * Get request statistics
 */
router.get('/stats/overview', controller.getRequestStats);

export default router;
