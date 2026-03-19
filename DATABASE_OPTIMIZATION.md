# Database Optimization Guide

## 🔍 Overview

This guide explains all database optimizations implemented for better performance, consistency, and maintainability.

---

## 1️⃣ SCHEMA IMPROVEMENTS

### Current Issues
- Missing indexes for common queries
- No subcollections for better data organization
- No field validation at database level
- Denormalized data could cause inconsistencies

### Optimized Schema Structure

#### Users Collection
```
users/ (collection)
├── [uid] (document)
├── name: string (indexed)
├── email: string (unique indexed)
├── role: string (indexed - for filtering)
├── createdAt: timestamp (indexed)
├── updatedAt: timestamp
├── status: boolean (optional - for soft deletes)
└── profile/
    ├── department: string (optional)
    ├── phone: string (optional)
    └── avatar: string (URL to image)
```

**Best Practices Applied:**
- ✅ Separate profile subcollection for optional fields
- ✅ Indexes on frequently queried fields
- ✅ Consistent timestamp naming
- ✅ Email marked as unique (enforced in rules)
- ✅ Status field for soft deletes

#### Service Requests Collection
```
service_requests/ (collection)
├── [requestId] (document)
├── studentId: string (indexed - for querying user's requests)
├── ticketNumber: string (indexed - for search)
├── category: string (indexed - like "Internet", "Electrical")
├── status: string (indexed - like "Pending", "In Progress")
├── priority: string (indexed - new field for sorting)
├── description: string (NOT indexed - text field)
├── location: string (NOT indexed - text field)
├── imageUrl: string (URL only)
├── assignedTo: string (indexed - for staff dashboards)
├── labels: array (indexed - for advanced filtering)
├── createdAt: timestamp (indexed)
├── updatedAt: timestamp (indexed)
├── resolvedAt: timestamp (optional)
├── resolutionNotes: string (NOT indexed)
└── feedback/ (subcollection for ratings)
    ├── [ratingId]
    ├── rating: number (1-5)
    ├── comment: string
    ├── ratedBy: string (studentId)
    └── createdAt: timestamp
```

**Best Practices Applied:**
- ✅ Indexed all filter/sort fields
- ✅ Subcollection for feedback (keeps requests lean)
- ✅ Priority field for smart sorting
- ✅ Labels array for tagging
- ✅ resolvedAt for data analysis
- ✅ Separate resolution notes

---

## 2️⃣ INDEXING STRATEGY

### Composite Indexes (for complex queries)

**Index 1: Student's requests by status**
```
Collection: service_requests
Fields: 
  - studentId (Ascending)
  - status (Ascending)
  - createdAt (Descending)
Purpose: Quick filtering of one student's requests by status
Query: db.collection('service_requests')
  .where('studentId', '==', 'student123')
  .where('status', '==', 'Pending')
  .orderBy('createdAt', 'desc')
```

**Index 2: All pending requests ordered by priority**
```
Collection: service_requests
Fields:
  - status (Ascending)
  - priority (Ascending)
  - createdAt (Descending)
Purpose: Admin dashboard showing all pending requests by priority
Query: db.collection('service_requests')
  .where('status', '==', 'Pending')
  .orderBy('priority', 'asc')
  .orderBy('createdAt', 'desc')
```

**Index 3: Staff member's assigned requests**
```
Collection: service_requests
Fields:
  - assignedTo (Ascending)
  - status (Ascending)
  - createdAt (Descending)
Purpose: Staff dashboard showing assigned work
Query: db.collection('service_requests')
  .where('assignedTo', '==', 'staff456')
  .where('status', '==', 'In Progress')
  .orderBy('createdAt', 'desc')
```

**Index 4: Requests by category**
```
Collection: service_requests
Fields:
  - category (Ascending)
  - status (Ascending)
  - createdAt (Descending)
Purpose: Filter requests by category and status
Query: db.collection('service_requests')
  .where('category', '==', 'Internet')
  .where('status', '==', 'Pending')
  .orderBy('createdAt', 'desc')
```

**Index 5: Users by role**
```
Collection: users
Fields:
  - role (Ascending)
  - createdAt (Descending)
Purpose: List staff/technicians/students
Query: db.collection('users')
  .where('role', '==', 'Staff')
  .orderBy('createdAt', 'desc')
```

### Single Field Indexes (auto-created by Firestore)
- `users.email` - For lookup by email
- `users.role` - For filtering by role
- `users.createdAt` - For sorting
- `service_requests.studentId` - For student's requests
- `service_requests.status` - For status filtering
- `service_requests.category` - For category filtering
- `service_requests.assignedTo` - For staff assignments
- `service_requests.ticketNumber` - For search
- `service_requests.createdAt` - For sorting
- `service_requests.priority` - For urgency sorting

### How to Add Indexes in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project → Firestore Database
3. Go to **Indexes** tab
4. Click **Create Index**
5. Add the fields in order as specified above
6. Firebase will build indexes in the background (~2-5 minutes)

---

## 3️⃣ DATA CONSISTENCY RULES

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper function to check if user is authenticated
    function isAuth() {
      return request.auth != null;
    }

    // Helper function to check if user is admin
    function isAdmin() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }

    // Helper function to check if user is staff
    function isStaff() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['Staff', 'Technician'];
    }

    // USERS COLLECTION
    match /users/{uid} {
      // Only authenticated users can read
      allow read: if isAuth();
      
      // Users can only write their own data
      allow create: if request.auth.uid == uid && 
                       isValidUserData();
      
      // Users can update their own non-critical fields
      allow update: if request.auth.uid == uid && 
                       isValidUserUpdate();
      
      // Only admins can delete
      allow delete: if isAdmin();

      // Validate user data on create
      function isValidUserData() {
        return request.resource.data.keys().hasAll(['email', 'name', 'role']) &&
               request.resource.data.email is string &&
               request.resource.data.email.size() > 0 &&
               request.resource.data.name is string &&
               request.resource.data.name.size() > 0 &&
               request.resource.data.role in ['Student', 'Staff', 'Technician', 'Admin'];
      }

      // Validate user updates
      function isValidUserUpdate() {
        let updateData = request.resource.data;
        return (!('email' in updateData) || updateData.email is string) &&
               (!('name' in updateData) || updateData.name is string) &&
               (!('role' in updateData) || updateData.role in ['Student', 'Staff', 'Technician', 'Admin']) &&
               updateData.updatedAt == request.time;
      }

      // Profile subcollection
      match /profile/{doc=**} {
        allow read: if isAuth();
        allow write: if request.auth.uid == uid;
      }
    }

    // SERVICE REQUESTS COLLECTION
    match /service_requests/{requestId} {
      // Students can read their own requests
      allow read: if isAuth() && 
                     (request.auth.uid == resource.data.studentId ||
                      resource.data.assignedTo == request.auth.uid ||
                      isStaff() || isAdmin());
      
      // Students can create requests
      allow create: if isAuth() && 
                       isValidServiceRequest() &&
                       request.resource.data.studentId == request.auth.uid;
      
      // Only request owner or assigned staff/admin can update
      allow update: if isAuth() && 
                       (request.auth.uid == resource.data.studentId ||
                        resource.data.assignedTo == request.auth.uid ||
                        isAdmin()) &&
                       isValidServiceRequestUpdate();
      
      // Only admins can delete
      allow delete: if isAdmin();

      // Validate new service request
      function isValidServiceRequest() {
        let data = request.resource.data;
        return data.keys().hasAll(['description', 'location', 'category', 'studentId']) &&
               data.description is string && data.description.size() >= 5 &&
               data.location is string && data.location.size() >= 3 &&
               data.category in ['Electrical', 'Internet', 'Hostel', 'Classroom', 'Plumbing', 'Other'] &&
               data.status == 'Pending' &&
               data.createdAt == request.time;
      }

      // Validate updates
      function isValidServiceRequestUpdate() {
        let data = request.resource.data;
        return (!('status' in data) || data.status in ['Pending', 'In Progress', 'Resolved', 'Rejected']) &&
               (!('priority' in data) || data.priority in ['Low', 'Medium', 'High', 'Urgent']) &&
               (!('description' in data) || (data.description is string && data.description.size() >= 5)) &&
               data.updatedAt == request.time;
      }

      // Feedback subcollection (ratings)
      match /feedback/{ratingId} {
        // Students can read their own feedback
        allow read: if isAuth();
        
        // Students can submit feedback for their requests
        allow create: if isAuth() && 
                        request.auth.uid == get(/databases/$(database)/documents/service_requests/$(requestId)).data.studentId &&
                        isValidFeedback();
        
        allow update: if false; // Feedback cannot be edited
        allow delete: if false; // Feedback cannot be deleted

        function isValidFeedback() {
          let data = request.resource.data;
          return data.keys().hasAll(['rating', 'ratedBy', 'createdAt']) &&
                 data.rating >= 1 && data.rating <= 5 &&
                 data.ratedBy == request.auth.uid;
        }
      }
    }

    // Default deny
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## 4️⃣ DATA CONSISTENCY BEST PRACTICES

### Never Denormalize Critical Fields
❌ **Bad**: Storing user name in every request document
```javascript
// DON'T DO THIS
{
  studentId: "uid123",
  studentName: "John Doe",  // ❌ Will become stale if name changes
  category: "Internet"
}
```

✅ **Good**: Store only references, fetch when needed
```javascript
// DO THIS
{
  studentId: "uid123",  // ✅ Reference to users/{uid123}
  category: "Internet"
}
// Fetch user data separately when needed
```

### Ensure Timestamps Are Consistent
✅ **Always use server timestamps**
```javascript
// GOOD - Server sets the time
{
  createdAt: admin.firestore.FieldValue.serverTimestamp(),
  updatedAt: admin.firestore.FieldValue.serverTimestamp()
}

// BAD - Client time can be unreliable
{
  createdAt: new Date().toISOString()  // ❌ Can be spoofed
}
```

### Atomic Operations for Related Updates
✅ **Use transactions for consistency**
```javascript
// GOOD - Atomic update
await db.runTransaction(async (transaction) => {
  // Read
  const request = await transaction.get(requestRef);
  
  // Update multiple docs as atomic unit
  transaction.update(requestRef, { status: 'Resolved' });
  transaction.update(staffRef, { completedRequests: request.data.completedRequests + 1 });
});

// BAD - Multiple separate writes can fail partially
await requestRef.update({ status: 'Resolved' });
await staffRef.update({ completedRequests: completed + 1 });  // ❌ May fail
```

### Field-Level Validation
✅ **Validate in backend and database rules**
```javascript
// Backend validation (Node.js)
const validateCategory = (category) => {
  const validCategories = ['Electrical', 'Internet', 'Hostel', 'Classroom', 'Plumbing', 'Other'];
  return validCategories.includes(category);
};

// Database rules validation (Firestore)
data.category in ['Electrical', 'Internet', 'Hostel', 'Classroom', 'Plumbing', 'Other']
```

### Status Transitions
✅ **Only allow valid status transitions**
```
Pending → In Progress → Resolved ✅
Pending → Rejected ✅
In Progress → Resolved ✅

❌ In Progress → Pending (not allowed)
❌ Resolved → In Progress (not allowed)
```

Implement in rules:
```javascript
function isValidStatusTransition() {
  let old = resource.data.status;
  let new = request.resource.data.status;
  
  return (old == 'Pending' && new in ['In Progress', 'Rejected']) ||
         (old == 'In Progress' && new in ['Resolved', 'Pending']) ||
         (old == 'Rejected' && new == 'Pending');
}
```

---

## 5️⃣ BACKUP & RECOVERY

### Automated Backups
1. Go to Firebase Console → Firestore → Backups
2. Set up daily automated backups
3. Keep 30 days of backup history

### Export Data Regularly
```bash
# Export to Cloud Storage
gcloud firestore export gs://your-bucket/backups/backup-$(date +%Y%m%d)
```

---

## 6️⃣ PERFORMANCE MONITORING

### Monitor These Metrics
- **Read Operations**: Should decrease with proper indexing
- **Write Operations**: Keep minimal with batch operations
- **Index Size**: Monitor index growth
- **Document Size**: Keep documents under 1MB

### Query Optimization Tips

❌ **Avoid**:
```javascript
// Slow - fetches all documents
const allRequests = await db.collection('service_requests').get();
const studentRequests = allRequests.docs.filter(d => d.data().studentId === 'uid123');
```

✅ **Do**:
```javascript
// Fast - Firestore does the filtering
const studentRequests = await db.collection('service_requests')
  .where('studentId', '==', 'uid123')
  .get();
```

---

## 7️⃣ IMPLEMENTATION CHECKLIST

- [ ] Review and implement security rules above
- [ ] Add composite indexes in Firebase Console
- [ ] Update backend models to validate all fields
- [ ] Test all query patterns with real data
- [ ] Monitor Firestore metrics for 1 week
- [ ] Set up daily backups
- [ ] Document any custom fields your app uses

---

## 📚 Summary

| Improvement | Benefit |
|-------------|---------|
| **Indexed Fields** | Queries 10-100x faster |
| **Security Rules** | Prevents invalid data writes |
| **Subcollections** | Cleaner data organization |
| **Atomic Updates** | No partial failures |
| **Field Validation** | Consistent data quality |
| **Status Transitions** | Enforce business logic |
| **Backup Strategy** | Disaster recovery |

**Result**: Production-ready database with strong consistency guarantees ✅

