// ============================================
// APPLICATION CONSTANTS
// Centralized constants for validation
// ============================================

export const CATEGORIES = [
  'Electrical',
  'Internet',
  'Hostel',
  'Classroom',
  'Plumbing',
  'Other'
];

export const REQUEST_STATUS = [
  'Pending',
  'In Progress',
  'Resolved',
  'Rejected'
];

export const USER_ROLES = [
  'Student',
  'Staff',
  'Technician',
  'Admin'
];

export const VALIDATION_RULES = {
  EMAIL: {
    min: 5,
    max: 254,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  PASSWORD: {
    min: 8,
    max: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
  },
  NAME: {
    min: 2,
    max: 100
  },
  DESCRIPTION: {
    min: 5,
    max: 5000
  },
  LOCATION: {
    min: 3,
    max: 200
  }
};

export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Invalid email format',
  INVALID_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, and number',
  INVALID_NAME: 'Name must be between 2 and 100 characters',
  INVALID_DESCRIPTION: 'Description must be between 5 and 5000 characters',
  INVALID_LOCATION: 'Location must be between 3 and 200 characters',
  NOT_FOUND: 'Resource not found',
  UNAUTHORIZED: 'Unauthorized access',
  SERVER_ERROR: 'Internal server error',
  INVALID_CATEGORY: 'Invalid category',
  INVALID_STATUS: 'Invalid status',
  INVALID_ROLE: 'Invalid user role'
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};
