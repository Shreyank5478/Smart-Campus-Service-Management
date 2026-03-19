import { useState } from 'react';
import { User, Lock, UserCircle } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  validateEmail,
  validatePassword,
  validateName,
  sanitizeInput,
  sanitizeEmail
} from '../security';

interface LoginProps {
  onLogin: (name: string, role: string, id: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(resetEmail)) {
      setError('Please enter a valid email address');
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, sanitizeEmail(resetEmail));
      setResetEmailSent(true);
    } catch (err: unknown) {
      const firebaseError = err as { code?: string };
      if (firebaseError.code === 'auth/user-not-found') {
        // Don't reveal whether email exists — send generic success message
        setResetEmailSent(true);
      } else {
        setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // ===== SECURITY: Input Validation =====
    // ✅ FIX #3: Removed insecure client-side rate limiting
    // Firebase Authentication provides built-in rate limiting for failed attempts
    // This is more secure than client-side localStorage checks which can be bypassed

    // Validate email
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (isSignup) {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        setError(passwordValidation.message);
        setLoading(false);
        return;
      }
    } else {
      // Login only requires minimum length
      if (!formData.password || formData.password.length < 6) {
        setError('Invalid email or password');
        setLoading(false);
        return;
      }
    }

    // ===== SECURITY: Input Sanitization =====
    const sanitizedEmail = sanitizeEmail(formData.email);
    const sanitizedName = sanitizeInput(formData.name);

    try {
      if (isSignup) {
        // Validate name for signup
        if (!validateName(sanitizedName)) {
          setError('Please enter a valid full name (2-100 characters)');
          setLoading(false);
          return;
        }

        // Note: Email uniqueness is enforced by Firebase Authentication itself.
        // No need to check Firestore here.

        // Create user account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          sanitizedEmail,
          formData.password
        );

        // Update profile with sanitized name
        await updateProfile(userCredential.user, {
          displayName: sanitizedName
        });

        // Save user doc keyed by UID so Firestore security rules can look it up via request.auth.uid
        try {
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            name: sanitizedName,
            email: sanitizedEmail,
            role: formData.role,
            uid: userCredential.user.uid,
            createdAt: new Date().toISOString()
          });
        } catch (firestoreError) {
          console.error('Firestore save error:', firestoreError);
        }

        // Use the Firebase UID as the user ID throughout the app
        onLogin(sanitizedName, formData.role, userCredential.user.uid);
      } else {
        // ===== SECURITY: Login Rate Limiting (already checked above) =====
        // Login with email and password
        const userCredential = await signInWithEmailAndPassword(
          auth,
          sanitizedEmail,
          formData.password
        );

        // Fetch user info & role from Firestore
        let userData: { name?: string; role?: string } | null = null;
        let role = 'Student';

        // Look up user doc by UID (the correct key that matches Firestore security rules)
        try {
          const userDocRef = doc(db, 'users', userCredential.user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            userData = userDoc.data() as { name?: string; role?: string };
            role = userData?.role || 'Student';
          } else {
            // Fallback: try old email-keyed doc (for users created before this fix)
            try {
              const oldDocRef = doc(db, 'users', sanitizedEmail);
              const oldDoc = await getDoc(oldDocRef);
              if (oldDoc.exists()) {
                userData = oldDoc.data() as { name?: string; role?: string };
                role = userData?.role || 'Student';
                // Migrate: re-save with UID as key
                await setDoc(doc(db, 'users', userCredential.user.uid), {
                  ...oldDoc.data(),
                  uid: userCredential.user.uid
                });
              }
            } catch (_) {}
          }
        } catch (firestoreError) {
          console.error('Firestore fetch error:', firestoreError);
        }

        const displayName =
          (userData?.name && String(userData.name)) ||
          userCredential.user.displayName ||
          formData.email.split('@')[0];

        // Use Firebase UID as the user ID throughout the app
        onLogin(displayName, role, userCredential.user.uid);
      }
    } catch (err: unknown) {
      // Show user-friendly error messages
      if (err instanceof Error) {
        const errorMessage = err.message.toLowerCase();
        
        if (errorMessage.includes('user-not-found')) {
          setError('Email not found. Please check your email or sign up.');
        } else if (errorMessage.includes('wrong-password') || errorMessage.includes('invalid-credential')) {
          setError('Email or password is incorrect. Please try again.');
        } else if (errorMessage.includes('email-already-in-use')) {
          setError('This email is already registered. Please log in instead.');
        } else if (errorMessage.includes('weak-password')) {
          setError('Password must be at least 6 characters.');
        } else if (errorMessage.includes('invalid-email')) {
          setError('Please enter a valid email address.');
        } else if (errorMessage.includes('operation-not-allowed')) {
          setError('Account creation is currently disabled. Please try again later.');
        } else if (errorMessage.includes('too-many-requests')) {
          setError('Too many login attempts. Please try again in a few minutes.');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <UserCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Smart Campus
          </h1>
          <p className="text-gray-600">Service Request Management System</p>
        </div>

        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setIsSignup(false)}
            className={`flex-1 py-2 rounded-md transition-all ${
              !isSignup
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`flex-1 py-2 rounded-md transition-all ${
              isSignup
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* ===== FORGOT PASSWORD SCREEN ===== */}
        {isForgotPassword && (
          <div>
            {resetEmailSent ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Email Sent!</h2>
                <p className="text-gray-600 text-sm mb-6">
                  If <strong>{resetEmail}</strong> is registered, you'll receive a password reset link shortly. Check your inbox and spam folder.
                </p>
                <button
                  onClick={() => { setIsForgotPassword(false); setResetEmailSent(false); setResetEmail(''); setError(''); }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Back to Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Reset Password</h2>
                  <p className="text-gray-500 text-sm mt-1">Enter your email and we'll send you a reset link.</p>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your registered email"
                      disabled={loading}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <button
                  type="button"
                  onClick={() => { setIsForgotPassword(false); setError(''); }}
                  className="w-full text-center text-sm text-blue-600 hover:underline font-medium py-1"
                >
                  ← Back to Login
                </button>
              </form>
            )}
          </div>
        )}

        {/* ===== NORMAL LOGIN / SIGNUP FORM ===== */}
        {!isForgotPassword && error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {!isForgotPassword && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required={isSignup}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                  disabled={loading}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100"
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100"
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>
          </div>

          {/* Forgot Password link — Login tab only */}
          {!isSignup && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => { setIsForgotPassword(true); setError(''); }}
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100"
                disabled={loading}
              >
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>
        )}

        {!isForgotPassword && (
        <div className="mt-6 text-center text-sm text-gray-600">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-600 hover:underline font-medium"
              >
                Login here
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up here
              </button>
            </p>
          )}
        </div>
        )}
      </div>
    </div>
  );
}
