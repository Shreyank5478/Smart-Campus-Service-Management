// ============================================
// USER ROUTES
// All routes for user endpoints
// ============================================

import express from 'express';
import * as controller from '../controllers/userController.js';
import { validateUser, sanitizeInputs } from '../middlewares/validation.js';
import { asyncHandler } from '../middlewares/errorHandler.js';

const router = express.Router();

/**
 * POST /api/users
 * Create a new user (Admin endpoint)
 * Body: { uid, email, name, role }
 */
router.post('/', sanitizeInputs, validateUser, controller.createUser);

/**
 * GET /api/users
 * Get all users (with optional role filter)
 * Query: ?role=Student
 */
router.get('/', controller.getAllUsers);

/**
 * GET /api/users/staff/list
 * Get all staff members (Technician + Staff roles)
 */
router.get('/staff/list', controller.getAllStaff);

/**
 * GET /api/users/stats/overview
 * Get user statistics by role
 */
router.get('/stats/overview', controller.getUserStats);

/**
 * GET /api/users/:uid
 * Get user by ID
 */
router.get('/:uid', controller.getUser);

/**
 * GET /api/users/email/:email
 * Get user by email
 */
router.get('/email/:email', controller.getUserByEmail);

/**
 * PUT /api/users/:uid
 * Update user
 * Body: { name, role }
 */
router.put('/:uid', sanitizeInputs, validateUser, controller.updateUser);

/**
 * PATCH /api/users/:uid/role
 * Update user role (Admin only)
 * Body: { role }
 */
router.patch('/:uid/role', controller.updateUserRole);

/**
 * DELETE /api/users/:uid
 * Delete user
 */
router.delete('/:uid', controller.deleteUser);

export default router;
