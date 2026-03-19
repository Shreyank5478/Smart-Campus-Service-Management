// ============================================
// DATABASE CONFIGURATION
// Initializes Firebase connection
// ============================================

import admin from 'firebase-admin';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin SDK
// Note: You need to download service account key from Firebase Console
// Place it as 'serviceAccountKey.json' in backend folder
let db = null;
let isConnected = false;

const serviceAccountPath = path.join(__dirname, '../serviceAccountKey.json');

try {
  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error('serviceAccountKey.json not found');
  }

  const rawData = fs.readFileSync(serviceAccountPath, 'utf8');
  const serviceAccount = JSON.parse(rawData);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });

  db = admin.firestore();
  isConnected = true;
  console.log('✓ Firebase connected successfully');
} catch (error) {
  console.error('\n⚠️  Firebase Connection Failed');
  console.error('Error:', error.message);
  console.log('\n📝 To fix this:');
  console.log('1. Go to Firebase Console');
  console.log('2. Select your project');
  console.log('3. Project Settings → Service Accounts tab');
  console.log('4. Click "Generate New Private Key"');
  console.log('5. Save the JSON file as: backend/serviceAccountKey.json');
  console.log('\n⏳ Server will start, but database operations will fail until this is done.\n');
}

/**
 * Get database instance (null if not connected)
 */
export function getDb() {
  return db;
}

/**
 * Check if Firebase is connected
 */
export function isFirebaseConnected() {
  return isConnected;
}

// Export database instance
export default db;
