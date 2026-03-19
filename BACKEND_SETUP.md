# Smart Campus Backend Setup Guide

This is a clean, beginner-friendly MVC (Model-View-Controller) backend API built with Node.js and Express.

## 📋 Table of Contents
1. [Project Structure](#project-structure)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)
5. [Code Examples](#code-examples)
6. [Error Handling](#error-handling)
7. [Development Tips](#development-tips)

---

## 🏗️ Project Structure

```
backend/
├── server.js                 # Main server entry point
├── package.json             # Dependencies
├── .env.example             # Environment variables template
├── config/
│   ├── database.js          # Firebase connection
│   └── constants.js         # App constants & validation rules
├── models/
│   ├── ServiceRequest.js    # Database operations for requests
│   └── User.js              # Database operations for users
├── controllers/
│   ├── serviceRequestController.js  # Business logic for requests
│   └── userController.js            # Business logic for users
├── routes/
│   ├── serviceRequestRoutes.js      # Request API routes
│   └── userRoutes.js                # User API routes
└── middlewares/
    ├── errorHandler.js      # Error handling & async wrapper
    └── validation.js        # Input validation & sanitization
```

### 📚 What Each Layer Does

**Models** → Database operations (CREATE, READ, UPDATE, DELETE)
- `ServiceRequest.js`: All database queries for service requests
- `User.js`: All database queries for users

**Controllers** → Business logic & request handling
- `serviceRequestController.js`: Logic for processing requests
- `userController.js`: Logic for processing users

**Routes** → API endpoints & URL mapping
- `serviceRequestRoutes.js`: Maps URLs to service request controllers
- `userRoutes.js`: Maps URLs to user controllers

**Middlewares** → Validation & error handling
- `errorHandler.js`: Catches and handles all errors
- `validation.js`: Validates user input before processing

---

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit .env and fill in your Firebase credentials
```

### 3. Firebase Setup

You need a Firebase service account key:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Click ⚙️ Project Settings
4. Go to "Service Accounts" tab
5. Click "Generate New Private Key"
6. Save as `backend/serviceAccountKey.json`

### 4. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

You should see:
```
✓ Server running on http://localhost:5000
✓ Firebase connected successfully
```

### 5. Test It Works

```bash
# In your browser or terminal:
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Smart Campus Backend is running",
  "timestamp": "2026-03-19T10:30:00.000Z",
  "environment": "development"
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend` folder:

```bash
# Server
PORT=5000
NODE_ENV=development

# Firebase Credentials (from Firebase Console)
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# CORS (allow frontend to connect)
CORS_ORIGIN=http://localhost:3002

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Service Request Endpoints

#### 1. Create a Service Request
```http
POST /requests
Content-Type: application/json

{
  "description": "Internet not working in Room 201",
  "location": "Hostel Block A",
  "category": "Internet",
  "studentId": "student123"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Service request created successfully",
  "data": {
    "id": "doc_id",
    "description": "Internet not working in Room 201",
    "location": "Hostel Block A",
    "category": "Internet",
    "studentId": "student123",
    "status": "Pending",
    "createdAt": "2026-03-19T10:30:00Z"
  }
}
```

#### 2. Get All Requests
```http
GET /requests
```

**With filters:**
```http
GET /requests?status=Pending&studentId=student123
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 5,
  "data": [
    { "id": "1", "description": "...", "status": "Pending" },
    { "id": "2", "description": "...", "status": "In Progress" }
  ]
}
```

#### 3. Get Single Request
```http
GET /requests/:id
```

#### 4. Update Request
```http
PUT /requests/:id
Content-Type: application/json

{
  "description": "Updated description",
  "location": "New location"
}
```

#### 5. Delete Request
```http
DELETE /requests/:id
```

#### 6. Assign Request to Staff
```http
PUT /requests/:id/assign
Content-Type: application/json

{
  "staffId": "staff456"
}
```

#### 7. Mark as Resolved
```http
PUT /requests/:id/resolve
Content-Type: application/json

{
  "notes": "Fixed internet connection"
}
```

#### 8. Get Requests by Student
```http
GET /requests/student/:studentId
```

#### 9. Get Requests Assigned to Staff
```http
GET /requests/assigned/:staffId
```

#### 10. Get Statistics
```http
GET /requests/stats/overview
```

**Response:**
```json
{
  "success": true,
  "data": {
    "pending": 5,
    "inProgress": 3,
    "resolved": 12,
    "total": 20
  }
}
```

---

### User Endpoints

#### 1. Create User
```http
POST /users
Content-Type: application/json

{
  "uid": "firebase_uid",
  "email": "student@example.com",
  "name": "John Doe",
  "role": "Student"
}
```

#### 2. Get All Users
```http
GET /users
GET /users?role=Student
```

#### 3. Get Single User
```http
GET /users/:uid
```

#### 4. Get User by Email
```http
GET /users/email/student@example.com
```

#### 5. Update User
```http
PUT /users/:uid
Content-Type: application/json

{
  "name": "Jane Doe"
}
```

#### 6. Update User Role
```http
PATCH /users/:uid/role
Content-Type: application/json

{
  "role": "Technician"
}
```

#### 7. Delete User
```http
DELETE /users/:uid
```

#### 8. Get All Staff
```http
GET /users/staff/list
```

#### 9. Get User Statistics
```http
GET /users/stats/overview
```

---

## 💻 Code Examples

### Example 1: Using the Service Request Model

```javascript
import ServiceRequest from './models/ServiceRequest.js';

// Get all requests
const allRequests = await ServiceRequest.getAll();

// Get requests by student
const studentRequests = await ServiceRequest.getByStudent('student123');

// Create new request
const newRequest = await ServiceRequest.create({
  description: 'WiFi issue',
  location: 'Room 201',
  category: 'Internet',
  studentId: 'student123'
});

// Update request
const updated = await ServiceRequest.update('doc_id', {
  status: 'In Progress'
});

// Mark as resolved
const resolved = await ServiceRequest.resolve('doc_id', 'Fixed!');
```

### Example 2: Using the User Model

```javascript
import User from './models/User.js';

// Create user
const user = await User.create({
  uid: 'firebase_uid',
  email: 'user@example.com',
  name: 'John',
  role: 'Student'
});

// Get user by ID
const foundUser = await User.getById('uid');

// Get all staff members
const staff = await User.getAllStaff();

// Update user role
const updated = await User.updateRole('uid', 'Technician');

// Get role counts
const stats = await User.getRoleCounts();
// Returns: { students: 10, staff: 5, technicians: 3, admins: 1 }
```

### Example 3: Controller Pattern

```javascript
// serviceRequestController.js
export const createRequest = asyncHandler(async (req, res) => {
  const { description, location, category } = req.body;

  // Validation happens in middleware
  // Business logic happens here
  const request = await ServiceRequest.create({
    description,
    location,
    category
  });

  // Return response
  res.status(201).json({
    success: true,
    data: request
  });
});
```

---

## ⚠️ Error Handling

All errors are automatically caught and formatted. Here are common error responses:

### 400 Bad Request
```json
{
  "success": false,
  "message": "Missing required fields: description, location, category",
  "status": 400
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Service request not found",
  "status": 404
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "status": 500
}
```

---

## 🛠️ Development Tips

### Adding a New Route

1. Create the controller method in `/controllers`
2. Import in your route file
3. Add the route with validation:

```javascript
// routes/exampleRoutes.js
import express from 'express';
import * as controller from '../controllers/exampleController.js';
import { validate, sanitize } from '../middlewares/validation.js';

const router = express.Router();

router.post('/', sanitize, validate, controller.create);

export default router;
```

### Adding Validation

1. Add validation function to `/middlewares/validation.js`
2. Use in route as middleware:

```javascript
router.post(
  '/',
  sanitizeInputs,        // Prevent XSS
  validateServiceRequest, // Check input is valid
  controller.createRequest
);
```

### Debugging

```javascript
// Use console.log for debugging
console.log('Request data:', req.body);
console.log('User info:', user);

// Error logging happens automatically
// Check terminal for error messages
```

---

## 🚨 Common Issues & Fixes

### "Firebase connection error"
- Make sure `serviceAccountKey.json` exists in backend folder
- Check Firebase credentials in `.env`

### "CORS error" in frontend
- Make sure `CORS_ORIGIN` in `.env` matches your frontend URL
- Default: `http://localhost:3002`

### Port already in use
- Change `PORT` in `.env` to an unused port
- Or kill existing process: `lsof -ti:5000 | xargs kill -9`

---

## 📦 Project Tree Summary

```
✓ Models    → Database queries
✓ Controllers → Business logic
✓ Routes    → API endpoints
✓ Middlewares → Validation & errors
✓ Config    → Database & constants
✓ Server    → Express setup
```

All clean, organized, and ready to extend!

---

**Need help?** Check the inline code comments in each file or review the example code above.
