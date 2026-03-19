# Firebase Setup Instructions

Your login logic has been updated to use Firebase Authentication v9 (modular). Follow these steps:

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Email/Password** authentication in Authentication > Sign-in method
4. Copy your Firebase config from Project Settings > Your apps > Web

## 2. Update Firebase Config

Replace the config in these two files with your actual Firebase credentials:

### File: `src/firebase.ts`
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### File: `dashboard.html`
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 3. Login Implementation Details

✅ **Email & Password Validation**
- Email must be a valid email format
- Password must be at least 6 characters
- Errors are shown in a red alert box

✅ **Redirect Logic**
- Redirect to `/dashboard.html` happens **ONLY inside** `signInWithEmailAndPassword().then()`
- Errors are caught and displayed in the `.catch()` block

✅ **No Mock/Fake Checks**
- Removed all localStorage and fake authentication
- Real Firebase authentication required

✅ **Dashboard Protection**
- `dashboard.html` uses `onAuthStateChanged()` to protect routes
- Unauthenticated users are automatically redirected to login
- Shows user info (name, email, UID) after login

✅ **No Auto-Login**
- No auto-login if form fields are filled
- User must submit the form to authenticate

## 4. Testing

### Create Test Account
1. Go to http://localhost:3000/
2. Click "Sign Up"
3. Enter name, email, password (6+ chars), and role
4. Click "Create Account"
5. Should redirect to `/dashboard.html`

### Login
1. Go to http://localhost:3000/
2. Enter email and password from test account
3. Click "Login"
4. Should redirect to `/dashboard.html` showing user details

### Protected Dashboard
1. Try accessing `/dashboard.html` directly without logging in
2. Should redirect to login after 2 seconds
3. Displays "Verifying authentication..." with loading spinner during check

## 5. Error Handling

The login form shows specific error messages for:
- Invalid email format
- Password too short
- Email not found (login)
- Wrong password (login)
- Email already in use (signup)
- Weak password (signup)
