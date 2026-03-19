// ============================================
// VALIDATION MIDDLEWARE
// Validates input data before processing
// ============================================

import { VALIDATION_RULES, ERROR_MESSAGES, CATEGORIES, REQUEST_STATUS, USER_ROLES } from '../config/constants.js';
import { ApiError } from './errorHandler.js';
import { HTTP_STATUS } from '../config/constants.js';

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  if (!email) return false;
  const { pattern, max } = VALIDATION_RULES.EMAIL;
  return pattern.test(email) && email.length <= max;
};

/**
 * Validate password strength
 */
export const validatePassword = (password) => {
  if (!password) return false;
  const { min, max, pattern } = VALIDATION_RULES.PASSWORD;
  return password.length >= min && password.length <= max && pattern.test(password);
};

/**
 * Validate name format
 */
export const validateName = (name) => {
  if (!name) return false;
  const { min, max } = VALIDATION_RULES.NAME;
  return name.length >= min && name.length <= max;
};

/**
 * Validate description
 */
export const validateDescription = (description) => {
  if (!description) return false;
  const { min, max } = VALIDATION_RULES.DESCRIPTION;
  return description.length >= min && description.length <= max;
};

/**
 * Validate location
 */
export const validateLocation = (location) => {
  if (!location) return false;
  const { min, max } = VALIDATION_RULES.LOCATION;
  return location.length >= min && location.length <= max;
};

/**
 * Validate category against whitelist
 */
export const validateCategory = (category) => {
  return CATEGORIES.includes(category);
};

/**
 * Validate status against whitelist
 */
export const validateStatus = (status) => {
  return REQUEST_STATUS.includes(status);
};

/**
 * Validate user role against whitelist
 */
export const validateRole = (role) => {
  return USER_ROLES.includes(role);
};

/**
 * Middleware to validate service request creation
 */
export const validateServiceRequest = (req, res, next) => {
  const { description, location, category } = req.body;

  // Check required fields
  if (!description || !location || !category) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Missing required fields: description, location, category');
  }

  // Validate description
  if (!validateDescription(description)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_DESCRIPTION);
  }

  // Validate location
  if (!validateLocation(location)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_LOCATION);
  }

  // Validate category
  if (!validateCategory(category)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_CATEGORY);
  }

  next();
};

/**
 * Middleware to validate user creation/update
 */
export const validateUser = (req, res, next) => {
  const { email, password, name, role } = req.body;

  // For signup (password required)
  if (req.path.includes('signup') || req.method === 'POST') {
    if (!email || !password || !name) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Missing required fields: email, password, name');
    }

    if (!validateEmail(email)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_EMAIL);
    }

    if (!validatePassword(password)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_PASSWORD);
    }
  }

  // Validate name if provided
  if (name && !validateName(name)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_NAME);
  }

  // Validate role if provided
  if (role && !validateRole(role)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_ROLE);
  }

  next();
};

/**
 * Middleware to validate status update
 */
export const validateStatusUpdate = (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Status is required');
  }

  if (!validateStatus(status)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_STATUS);
  }

  next();
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

/**
 * Middleware to sanitize all string inputs
 */
export const sanitizeInputs = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeInput(req.body[key]);
      }
    });
  }
  next();
};
