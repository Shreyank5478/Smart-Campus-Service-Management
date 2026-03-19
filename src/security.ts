/**
 * SECURITY UTILITIES
 * Handles input validation, sanitization, and XSS protection
 */

// ============================================
// 1. INPUT VALIDATION
// ============================================

/**
 * Validate email format
 * @param email - Email to validate
 * @returns true if valid email format
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) && email.length <= 254;
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @returns object with isValid and message
 */
export function validatePassword(password: string): { isValid: boolean; message: string } {
  if (!password || typeof password !== 'string') {
    return { isValid: false, message: 'Password is required' };
  }

  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters' };
  }

  if (password.length > 128) {
    return { isValid: false, message: 'Password is too long (max 128 characters)' };
  }

  // Check for at least one uppercase, one lowercase, one number
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber) {
    return {
      isValid: false,
      message: 'Password must contain uppercase, lowercase, and numbers'
    };
  }

  return { isValid: true, message: 'Password is strong' };
}

/**
 * Validate name/text input
 * @param name - Name to validate
 * @param minLength - Minimum length (default: 2)
 * @param maxLength - Maximum length (default: 100)
 * @returns true if valid
 */
export function validateName(name: string, minLength = 2, maxLength = 100): boolean {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
}

/**
 * Validate description/textarea input
 * @param text - Text to validate
 * @param minLength - Minimum length (default: 5)
 * @param maxLength - Maximum length (default: 5000)
 * @returns true if valid
 */
export function validateDescription(text: string, minLength = 5, maxLength = 5000): boolean {
  if (!text || typeof text !== 'string') return false;
  const trimmed = text.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
}

/**
 * Validate location input
 * @param location - Location to validate
 * @returns true if valid
 */
export function validateLocation(location: string): boolean {
  if (!location || typeof location !== 'string') return false;
  const trimmed = location.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
}

/**
 * Validate file size
 * @param fileSize - File size in bytes
 * @param maxSizeInMB - Maximum size in MB (default: 2)
 * @returns true if valid
 */
export function validateFileSize(fileSize: number, maxSizeInMB = 2): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return fileSize <= maxSizeInBytes;
}

/**
 * Validate file type
 * @param fileType - MIME type of file
 * @param allowedTypes - Array of allowed MIME types
 * @returns true if valid
 */
export function validateFileType(fileType: string, allowedTypes: string[]): boolean {
  if (!fileType || typeof fileType !== 'string') return false;
  return allowedTypes.includes(fileType.toLowerCase());
}

/**
 * Validate category selection
 * @param category - Category to validate
 * @param allowedCategories - Array of allowed categories
 * @returns true if valid
 */
export function validateCategory(category: string, allowedCategories: string[]): boolean {
  if (!category || typeof category !== 'string') return false;
  return allowedCategories.includes(category.trim());
}

/**
 * Validate status
 * @param status - Status to validate
 * @returns true if valid
 */
export function validateStatus(status: string): boolean {
  const validStatuses = ['Pending', 'In Progress', 'Resolved'];
  return validStatuses.includes(status);
}

/**
 * Validate role for Admin-level operations (e.g., UserManagement panel).
 * Allows all internal roles including Admin and Technician.
 * @param role - Role to validate
 * @returns true if valid
 */
export function validateRole(role: string): boolean {
  const validRoles = ['Student', 'Staff', 'Technician', 'Admin'];
  return validRoles.includes(role);
}

/**
 * Validate role for self-registration / public signup.
 * Admin and Technician accounts CANNOT be created via public signup.
 * Only an existing Admin can promote a user to Admin via User Management.
 * @param role - Role chosen by the user on the signup form
 * @returns true only for Student or Staff
 */
export function validateSignupRole(role: string): boolean {
  const allowedSignupRoles = ['Student', 'Staff'];
  return allowedSignupRoles.includes(role);
}

// ============================================
// 2. INPUT SANITIZATION
// ============================================

/**
 * Sanitize text input to prevent XSS
 * Removes dangerous characters while preserving safe content
 * @param input - Input to sanitize
 * @returns sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';

  // Trim whitespace
  let sanitized = input.trim();

  // Remove any scripts or dangerous HTML tags (React already escapes, but be explicit)
  // Note: React escapes by default, but we sanitize for extra safety
  sanitized = sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers like onclick=

  return sanitized;
}

/**
 * Sanitize email
 * @param email - Email to sanitize
 * @returns sanitized email
 */
export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

/**
 * Escape HTML entities to prevent XSS
 * @param text - Text to escape
 * @returns escaped text
 */
export function escapeHtml(text: string): string {
  if (!text || typeof text !== 'string') return '';

  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Remove any potential SQL injection patterns
 * @param input - Input to sanitize
 * @returns sanitized input
 */
export function sanitizeSqlInput(input: string): string {
  if (!input || typeof input !== 'string') return '';

  // Remove SQL keywords and dangerous patterns
  const sqlPattern = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|OR|AND)\b|[;'"\\])/gi;
  return input.replace(sqlPattern, '').trim();
}

// ============================================
// 3. SECURITY HELPERS
// ============================================

/**
 * Generate CSRF token (client-side)
 * @returns random token string
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Validate CSRF token
 * @param token - Token to validate
 * @param storedToken - Stored token to compare
 * @returns true if tokens match
 */
export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken && token.length === 64;
}

/**
 * Rate limit check
 * @param key - Unique identifier (e.g., email)
 * @param maxAttempts - Maximum allowed attempts
 * @param timeWindowInSeconds - Time window for rate limit
 * @returns true if within rate limit
 */
export function checkRateLimit(
  key: string,
  maxAttempts = 5,
  timeWindowInSeconds = 300
): boolean {
  if (!key) return false;

  const storageKey = `rate_limit_${key}`;
  const now = Date.now();
  const data = localStorage.getItem(storageKey);

  if (!data) {
    localStorage.setItem(storageKey, JSON.stringify({ count: 1, timestamp: now }));
    return true;
  }

  try {
    const { count, timestamp } = JSON.parse(data);
    const elapsedSeconds = (now - timestamp) / 1000;

    if (elapsedSeconds > timeWindowInSeconds) {
      // Time window expired, reset counter
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, timestamp: now }));
      return true;
    }

    if (count >= maxAttempts) {
      return false; // Rate limit exceeded
    }

    // Increment counter
    localStorage.setItem(storageKey, JSON.stringify({ count: count + 1, timestamp }));
    return true;
  } catch (error) {
    console.error('Rate limit check error:', error);
    return true; // Allow on error
  }
}

/**
 * Validate user input object (for forms)
 * @param data - Form data object
 * @param rules - Validation rules
 * @returns object with validation result and errors
 */
export function validateFormData(
  data: Record<string, any>,
  rules: Record<string, (value: any) => string | null>
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  for (const [field, validator] of Object.entries(rules)) {
    const error = validator(data[field]);
    if (error) {
      errors[field] = error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// ============================================
// 4. CONTENT SECURITY POLICY HELPERS
// ============================================

/**
 * Get CSP meta tag value
 * @returns CSP string for meta tag
 */
export function getCSPMetaTag(): string {
  return `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.firebaseapp.com firebaseapp.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' data:;
    connect-src 'self' firebaseapp.com *.firebaseapp.com *.firebasedatabase.app *.firebaseio.com firebasestorage.app *.firebasehosting.com;
  `.trim();
}

/**
 * Validate URL origin
 * @param url - URL to validate
 * @returns true if URL is from same origin
 */
export function isSafeUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const urlObj = new URL(url, window.location.href);
    return urlObj.origin === window.location.origin;
  } catch {
    return false;
  }
}

export default {
  // Validation functions
  validateEmail,
  validatePassword,
  validateName,
  validateDescription,
  validateLocation,
  validateFileSize,
  validateFileType,
  validateCategory,
  validateStatus,
  validateRole,
  validateFormData,

  // Sanitization functions
  sanitizeInput,
  sanitizeEmail,
  escapeHtml,
  sanitizeSqlInput,

  // Security helpers
  generateCSRFToken,
  validateCSRFToken,
  getCSPMetaTag,
  isSafeUrl
};
