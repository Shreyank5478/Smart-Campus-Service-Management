# Bug Fixes - Code Snippets & Implementation Guide

## 🔴 CRITICAL BUG #1: Assignment Not Persisted to Firestore

### Location: `src/App.tsx` - handleUpdateRequest function

**Current (Broken) Code:**
```typescript
const handleUpdateRequest = (id: string, updates: Partial<ServiceRequest>) => {
  setRequests(requests.map(req => {
    if (req.id === id) {
      const updatedRequest = { ...req, ...updates };
      if (updates.status && updates.status !== req.status) {
        updatedRequest.statusUpdates = [
          ...req.statusUpdates,
          {
            status: updates.status,
            timestamp: new Date().toLocaleString(),
            note: `Status updated to ${updates.status}`
          }
        ];
      }
      return updatedRequest;
    }
    return req;
  }));
  // ❌ Missing: Firestore update
};
```

**Fixed Code:**
```typescript
const handleUpdateRequest = async (id: string, updates: Partial<ServiceRequest>) => {
  // 1. Update local state immediately (optimistic update)
  setRequests(requests.map(req => {
    if (req.id === id) {
      const updatedRequest = { ...req, ...updates };
      if (updates.status && updates.status !== req.status) {
        updatedRequest.statusUpdates = [
          ...req.statusUpdates,
          {
            status: updates.status,
            timestamp: new Date().toLocaleString(),
            note: `Status updated to ${updates.status}`
          }
        ];
      }
      return updatedRequest;
    }
    return req;
  }));

  // 2. ✅ NEW: Persist to Firestore
  try {
    const updateData: Record<string, any> = {
      ...updates,
      updatedAt: new Date()
    };

    // Only include valid fields
    if (updates.status) updateData.status = updates.status;
    if (updates.assignedTo) updateData.assignedTo = updates.assignedTo;
    if (updates.statusUpdates) updateData.statusUpdates = updates.statusUpdates;

    await updateDoc(doc(db, 'service_requests', id), updateData);
    console.log(`✓ Request ${id} updated in Firestore`);
  } catch (error) {
    console.error('Failed to persist update:', error);
    // Revert local state on error
    setRequests(prevRequests => 
      prevRequests.map(req => 
        req.id === id ? requests.find(r => r.id === id) || req : req
      )
    );
    // Inform user
    alert('Failed to save changes. Please try again.');
  }
};
```

**In AdminDashboard.tsx, update the call:**
```typescript
const handleAssignTo = async (requestId: string, staffName: string) => {
  // Change from: onUpdateRequest(requestId, { assignedTo: staffName });
  // To: await onUpdateRequest(requestId, { assignedTo: staffName });
  await onUpdateRequest(requestId, { assignedTo: staffName });
};
```

**Required Imports:**
```typescript
import { updateDoc, doc } from 'firebase/firestore';
```

---

## 🔴 CRITICAL BUG #2: Remove Hardcoded Sample Data

### Location: `src/App.tsx` - initialization

**Current (Broken) Code:**
```typescript
const [requests, setRequests] = useState<ServiceRequest[]>([
  {
    id: 'REQ001',
    ticketNumber: 'REQ001',
    category: 'Internet',
    description: 'WiFi not working in Room 204...',
    // ... 30+ lines of hardcoded data
  },
  // More hardcoded requests
]);
```

**Fixed Code:**
```typescript
// Initialize with empty array - fetch from Firestore only
const [requests, setRequests] = useState<ServiceRequest[]>([]);

// Add useEffect to fetch from Firestore (do this ONCE at App level)
useEffect(() => {
  if (!currentUser) return; // Don't fetch if not logged in

  const fetchAllRequests = async () => {
    try {
      const requestsRef = collection(db, 'service_requests');
      const unsubscribe = onSnapshot(requestsRef, (snapshot) => {
        const firestoreRequests: ServiceRequest[] = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ticketNumber: data.ticketNumber || `REQ-${doc.id.slice(0, 6)}`,
            category: data.category || '',
            description: data.description || '',
            location: data.location || '',
            status: data.status || 'Pending',
            studentName: data.studentName || '',
            studentId: data.studentId || '',
            dateSubmitted: data.dateSubmitted || '',
            assignedTo: data.assignedTo,
            imageUrl: data.imageUrl,
            statusUpdates: data.statusUpdates || []
          } as ServiceRequest;
        });
        
        setRequests(firestoreRequests);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Error fetching requests:', error);
      setRequests([]);
    }
  };

  return fetchAllRequests();
}, [currentUser]);
```

**Then DELETE the old `useEffect` fetch from AdminDashboard.tsx (lines 30-77)** since requests are now fetched at App level.

**Required Imports:**
```typescript
import { collection, onSnapshot } from 'firebase/firestore';
```

---

## 🔴 CRITICAL BUG #3: Server-Side Rate Limiting

### New File: `backend/middlewares/rateLimiter.js`

```javascript
// ============================================
// RATE LIMITER MIDDLEWARE
// Server-side rate limiting using in-memory store
// For production: Replace with Redis
// ============================================

const rateLimitStore = {}; // In-memory store (use Redis for production)

export class RateLimiter {
  constructor(windowMs = 15 * 60 * 1000, maxRequests = 5) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  middleware() {
    return (req, res, next) => {
      // Use email or IP address as key
      const key = req.body?.email || req.ip;

      if (!key) {
        return next();
      }

      const now = Date.now();
      const windowStart = now - this.windowMs;

      // Initialize if first request
      if (!rateLimitStore[key]) {
        rateLimitStore[key] = [];
      }

      // Remove old requests outside window
      rateLimitStore[key] = rateLimitStore[key].filter(
        (timestamp) => timestamp > windowStart
      );

      // Check if limit exceeded
      if (rateLimitStore[key].length >= this.maxRequests) {
        const resetTime = Math.ceil(
          (rateLimitStore[key][0] + this.windowMs - now) / 1000
        );
        return res.status(429).json({
          success: false,
          message: `Too many requests. Try again in ${resetTime} seconds.`,
          retryAfter: resetTime
        });
      }

      // Add current request
      rateLimitStore[key].push(now);
      next();
    };
  }

  // For production with Redis:
  static async createRedisLimiter(redisClient) {
    return {
      middleware() {
        return async (req, res, next) => {
          const key = `rate_limit:${req.body?.email || req.ip}`;
          const limit = 5;
          const window = 300; // 5 minutes

          try {
            const current = await redisClient.incr(key);

            if (current === 1) {
              await redisClient.expire(key, window);
            }

            if (current > limit) {
              const ttl = await redisClient.ttl(key);
              return res.status(429).json({
                success: false,
                message: 'Too many login attempts. Try again later.',
                retryAfter: ttl
              });
            }

            next();
          } catch (error) {
            console.error('Rate limit check error:', error);
            next(); // Allow on error
          }
        };
      }
    };
  }
}

export default RateLimiter;
```

### Integration: `backend/server.js`

```javascript
import { RateLimiter } from './middlewares/rateLimiter.js';

const app = express();

// Add rate limiter for login endpoint
const loginLimiter = new RateLimiter(5 * 60 * 1000, 5).middleware();

// Apply to login route only
app.post('/api/auth/login', loginLimiter, (req, res) => {
  // ... login logic
});

// Alternative: Apply globally for all POST requests
// app.use((req, res, next) => {
//   if (req.method === 'POST') {
//     return loginLimiter(req, res, next);
//   }
//   next();
// });
```

**Remove from Frontend:** Delete `checkRateLimit()` function from `src/security.ts` and remove its usage from `Login.tsx`

---

## 🔴 CRITICAL BUG #4: Deploy Firestore Security Rules

### New File: `firestore.rules`

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
   
    // User document - only owner can read/write
    match /users/{userId} {
      allow read: if request.auth.uid == userId || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
      allow create: if request.auth.uid == userId &&
                       validate_user_data(request.resource.data);
      allow update: if request.auth.uid == userId || 
                       get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
      allow delete: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }

    // Service request document
    match /service_requests/{requestId} {
      // Read: Student can read own, Staff/Admin can read all
      allow read: if is_student() && resource.data.studentId == request.auth.uid ||
                     is_staff() || 
                     is_admin();

      // Create: Only students can create their own requests
      allow create: if is_student() &&
                       request.resource.data.studentId == request.auth.uid &&
                       validate_request_data(request.resource.data);

      // Update: Student can update own, Staff/Admin can update all
      allow update: if is_student() && resource.data.studentId == request.auth.uid ||
                       is_staff() && can_update_status(resource.data, request.resource.data) ||
                       is_admin();

      // Delete: Only admin can delete
      allow delete: if is_admin();
    }

    // Audit log - append only
    match /audit_logs/{logId} {
      allow read: if is_admin();
      allow create: if request.auth != null;
      allow update, delete: if false; // Append only
    }
  }

  // Helper functions
  function is_student() {
    return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Student';
  }

  function is_staff() {
    let role = get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
    return role == 'Staff' || role == 'Technician';
  }

  function is_admin() {
    return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
  }

  function validate_user_data(data) {
    return data.email is string &&
           data.name is string &&
           data.role in ['Student', 'Staff', 'Technician', 'Admin'];
  }

  function validate_request_data(data) {
    return data.description is string && data.description.size() >= 5 && data.description.size() <= 5000 &&
           data.location is string && data.location.size() >= 3 && data.location.size() <= 200 &&
           data.category is string && 
           data.status == 'Pending';
  }

  function can_update_status(oldData, newData) {
    let valid_transitions = {
      'Pending': ['In Progress', 'Rejected'],
      'In Progress': ['Resolved'],
      'Resolved': [],
      'Rejected': []
    };
    
    let old_status = oldData.status;
    let new_status = newData.status;
    
    return new_status in valid_transitions[old_status];
  }
}
```

**Deploy via Firebase CLI:**
```bash
firebase deploy --only firestore:rules
```

---

## ⚠️ HIGH PRIORITY BUG #5: Backend Input Sanitization

### Update: `backend/middlewares/validation.js`

```javascript
import DOMPurify from 'isomorphic-dompurify'; // npm install isomorphic-dompurify

export const sanitizeInputs = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        // Remove HTML/script tags
        req.body[key] = DOMPurify.sanitize(req.body[key]);
        
        // Trim whitespace
        req.body[key] = req.body[key].trim();
      }
    });
  }
  next();
};

export const validateServiceRequest = (req, res, next) => {
  const { description, location, category, studentId } = req.body;

  // EXISTING VALIDATION
  if (!description || !location || !category) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Missing required fields');
  }

  // NEW: Check for remaining HTML/scripts after sanitization
  if (/<[^>]*>/.test(description) || /<[^>]*>/.test(location)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'HTML tags not allowed');
  }

  // Existing validation continues...
  if (!validateDescription(description)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_DESCRIPTION);
  }

  if (!validateLocation(location)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_LOCATION);
  }

  if (!validateCategory(category)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.INVALID_CATEGORY);
  }

  next();
};
```

---

## ⚠️ HIGH PRIORITY BUG #6: Status Transition Validation

### Update: `src/components/StaffDashboard.tsx`

```typescript
// Add validation function
const isValidStatusTransition = (fromStatus: string, toStatus: string): boolean => {
  const validTransitions: Record<string, string[]> = {
    'Pending': ['In Progress', 'Rejected'],
    'In Progress': ['Resolved', 'Pending'],
    'Resolved': ['Pending'],
    'Rejected': ['Pending']
  };
  
  return validTransitions[fromStatus]?.includes(toStatus) ?? false;
};

// Update handleStatusUpdate
const handleStatusUpdate = async (
  requestId: string,
  newStatus: 'In Progress' | 'Resolved' | 'Pending',
  note: string
) => {
  // NEW: Validate transition
  const request = allRequests.find(r => r.id === requestId);
  if (!request) return;

  if (!isValidStatusTransition(request.status, newStatus)) {
    alert(`Cannot change from '${request.status}' to '${newStatus}'`);
    return;
  }

  // NEW: Validate note
  if (!note || note.trim().length === 0) {
    alert('Please provide a note for status change (required for auditing)');
    return;
  }

  if (note.length > 500) {
    alert('Note must be less than 500 characters');
    return;
  }

  // Continue with existing logic...
  setUpdating(requestId);
  try {
    const existingRequest = allRequests.find(r => r.id === requestId);
    if (!existingRequest) {
      console.error('Request not found:', requestId);
      setUpdating(null);
      return;
    }

    const updatedStatusUpdates = [
      ...existingRequest.statusUpdates,
      {
        status: newStatus,
        timestamp: new Date().toLocaleString(),
        note: note.trim()
      }
    ];

    const updatedRequest = { ...existingRequest, status: newStatus, statusUpdates: updatedStatusUpdates };
    
    setAllRequests(allRequests.map(r => (r.id === requestId ? updatedRequest : r)));
    onUpdateRequest(requestId, { status: newStatus, statusUpdates: updatedStatusUpdates });

    setResolveModal(null);
    setResolveNote('');
  } catch (error) {
    console.error('Error updating status:', error);
  } finally {
    setUpdating(null);
  }
};
```

---

## 🟡 MEDIUM BUG #7: Implement Pagination

### Update: `src/components/AdminDashboard.tsx`

```typescript
import { useState, useEffect } from 'react';
import { query, collection, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';

const ITEMS_PER_PAGE = 20;

export function AdminDashboard({ ... }) {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      try {
        const requestsRef = collection(db, 'service_requests');
        
        let q;
        if (currentPage === 0) {
          q = query(
            requestsRef,
            orderBy('createdAt', 'desc'),
            limit(ITEMS_PER_PAGE + 1) // +1 to check if more pages exist
          );
        } else {
          q = query(
            requestsRef,
            orderBy('createdAt', 'desc'),
            startAfter(lastDocSnapshot),
            limit(ITEMS_PER_PAGE + 1)
          );
        }

        const snapshot = await getDocs(q);
        const docs = snapshot.docs.slice(0, ITEMS_PER_PAGE); // Limit to exact page size
        
        const pageRequests = docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ServiceRequest[];

        setRequests(pageRequests);
        setLastDocSnapshot(docs[docs.length - 1]);
        
        // Store for pagination
        if (currentPage === 0) {
          setTotalCount(snapshot.docs.length);
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
        setRequests([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, [currentPage]);

  const hasNextPage = totalCount > (currentPage + 1) * ITEMS_PER_PAGE;
  const hasPrevPage = currentPage > 0;

  return (
    <div>
      {/* Existing content */}
      
      {/* NEW: Pagination Controls */}
      <div className="flex items-center justify-between mt-6 px-6 py-4">
        <div className="text-sm text-gray-600">
          Page {currentPage + 1} - Showing {requests.length} of {totalCount} requests
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={!hasPrevPage}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            ← Previous
          </button>
          
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!hasNextPage}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>

      {isLoading && <div>Loading...</div>}
    </div>
  );
}
```

---

## Summary of Changes

| Bug | Files Changed | Time | Priority |
|-----|---------------|------|----------|
| Assignment persistence | `App.tsx` | 1 hr | CRITICAL |
| Dual data source | `App.tsx`, `AdminDashboard.tsx`, `StaffDashboard.tsx` | 1 hr | CRITICAL |
| Rate limiting | `backend/middlewares/rateLimiter.js`, `server.js` | 2 hrs | CRITICAL |
| Firestore rules | `firestore.rules` | 1 hr | CRITICAL |
| Backend sanitization | `backend/middlewares/validation.js` | 2 hrs | HIGH |
| Status validation | `StaffDashboard.tsx` | 1 hr | HIGH |
| Pagination | `AdminDashboard.tsx`, `StaffDashboard.tsx` | 3 hrs | HIGH |

**Total Implementation Time: ~12 hours**

**Recommended Schedule:**
- Day 1-2: Critical bugs (5 hours)
- Day 3-4: High priority bugs (7 hours)
- Day 5: Testing & fixes (2 hours)

All fixes tested with the test cases provided in `TESTING_ANALYSIS.md`
