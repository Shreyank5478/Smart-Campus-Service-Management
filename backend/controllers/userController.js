// ============================================
// USER CONTROLLER
// Handles business logic for users
// ============================================

import User from '../models/User.js';
import { asyncHandler, ApiError } from '../middlewares/errorHandler.js';
import { HTTP_STATUS } from '../config/constants.js';

/**
 * Create a new user (Admin endpoint)
 * @route POST /api/users
 * @body {string} uid - User ID from Firebase
 * @body {string} email - User email
 * @body {string} name - User name
 * @body {string} role - User role
 */
export const createUser = asyncHandler(async (req, res) => {
  const { uid, email, name, role } = req.body;

  if (!uid || !email || !name || !role) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Missing required fields');
  }

  const user = await User.create({
    uid,
    email,
    name,
    role
  });

  res.status(HTTP_STATUS.CREATED).json({
    success: true,
    message: 'User created successfully',
    data: user
  });
});

/**
 * Get user by ID
 * @route GET /api/users/:uid
 */
export const getUser = asyncHandler(async (req, res) => {
  const { uid } = req.params;

  const user = await User.getById(uid);

  // Don't send password
  delete user.password;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: user
  });
});

/**
 * Get user by email
 * @route GET /api/users/email/:email
 */
export const getUserByEmail = asyncHandler(async (req, res) => {
  let { email } = req.params;
  email = decodeURIComponent(email);

  const user = await User.getByEmail(email);

  // Don't send password
  delete user.password;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: user
  });
});

/**
 * Get all users
 * @route GET /api/users
 * @query {string} role - Filter by role
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const { role } = req.query;

  const filters = {};
  if (role) filters.role = role;

  const users = await User.getAll(filters);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: users.length,
    data: users
  });
});

/**
 * Update user
 * @route PUT /api/users/:uid
 */
export const updateUser = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const updateData = req.body;

  const user = await User.update(uid, updateData);

  // Don't send password
  delete user.password;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'User updated successfully',
    data: user
  });
});

/**
 * Delete user
 * @route DELETE /api/users/:uid
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const { uid } = req.params;

  await User.delete(uid);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'User deleted successfully'
  });
});

/**
 * Get all staff members
 * @route GET /api/users/staff/list
 */
export const getAllStaff = asyncHandler(async (req, res) => {
  const staff = await User.getAllStaff();

  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: staff.length,
    data: staff
  });
});

/**
 * Get dashboard statistics
 * @route GET /api/users/stats/overview
 */
export const getUserStats = asyncHandler(async (req, res) => {
  const stats = await User.getRoleCounts();
  const total = stats.students + stats.staff + stats.technicians + stats.admins;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: {
      ...stats,
      total
    }
  });
});

/**
 * Update user role (Admin only)
 * @route PATCH /api/users/:uid/role
 * @body {string} role - New role
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const { role } = req.body;

  if (!role) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Role is required');
  }

  const user = await User.updateRole(uid, role);

  // Don't send password
  delete user.password;

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'User role updated successfully',
    data: user
  });
});
