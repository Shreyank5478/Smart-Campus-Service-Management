// ============================================
// ERROR HANDLING MIDDLEWARE
// Catches and handles all application errors
// ============================================

import { HTTP_STATUS, ERROR_MESSAGES } from '../config/constants.js';

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

/**
 * Main error handling middleware
 * All errors from routes/controllers get processed here
 */
export const errorHandler = (err, req, res, next) => {
  // Log error to console for debugging
  console.error('Error:', {
    message: err.message,
    status: err.status || HTTP_STATUS.SERVER_ERROR,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });

  // Handle custom API errors
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
      status: err.status
    });
  }

  // Handle Firebase errors
  if (err.code && err.code.startsWith('auth/')) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: 'Authentication error: ' + err.message,
      status: HTTP_STATUS.UNAUTHORIZED
    });
  }

  // Handle Firestore errors
  if (err.code === 'PERMISSION_DENIED') {
    return res.status(HTTP_STATUS.FORBIDDEN).json({
      success: false,
      message: 'Access denied',
      status: HTTP_STATUS.FORBIDDEN
    });
  }

  // Default server error
  res.status(HTTP_STATUS.SERVER_ERROR).json({
    success: false,
    message: ERROR_MESSAGES.SERVER_ERROR,
    status: HTTP_STATUS.SERVER_ERROR,
    // Only show error details in development
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
};

/**
 * 404 Not Found middleware
 * Handles routes that don't exist
 */
export const notFoundHandler = (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: ERROR_MESSAGES.NOT_FOUND,
    status: HTTP_STATUS.NOT_FOUND,
    path: req.originalUrl
  });
};

/**
 * Async wrapper to catch errors in async route handlers
 * Usage: router.get('/route', asyncHandler(controller.method))
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
