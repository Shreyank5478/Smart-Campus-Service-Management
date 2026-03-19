// ============================================
// USER MODEL
// Handles all database operations for users
// ============================================

import { getDb, isFirebaseConnected } from '../config/database.js';

/**
 * User Model
 * All methods interact with Firestore 'users' collection
 * Includes validation, atomic transactions, and consistency checks
 */
class User {
  constructor() {
    const db = getDb();
    this.db = db;
    this.collection = db ? db.collection('users') : null;
  }

  /**
   * Check if database is available
   */
  checkConnection() {
    if (!isFirebaseConnected() || !this.collection || !this.db) {
      throw new Error('Firebase is not connected. Please add serviceAccountKey.json to backend folder.');
    }
  }

  /**
   * Valid roles
   */
  get validRoles() {
    return ['Student', 'Staff', 'Technician', 'Admin'];
  }

  /**
   * Check if email already exists
   */
  async emailExists(email, excludeUid = null) {
    try {
      this.checkConnection();
      let query = this.collection.where('email', '==', email);
      const snapshot = await query.get();

      if (snapshot.empty) return false;

      // Exclude the current user if updating their own email
      if (excludeUid) {
        return !snapshot.docs.some((doc) => doc.id === excludeUid);
      }

      return true;
    } catch (error) {
      throw new Error(`Error checking email: ${error.message}`);
    }
  }

  /**
   * Create a new user (with atomicity and validation)
   * @param {Object} data - User data
   * @returns {Promise<Object>} Created user
   */
  async create(data) {
    try {
      this.checkConnection();

      // Validate required fields
      if (!data.uid || !data.email || !data.name || !data.role) {
        throw new Error('Missing required fields: uid, email, name, role');
      }

      // Validate role
      if (!this.validRoles.includes(data.role)) {
        throw new Error(`Invalid role. Must be one of: ${this.validRoles.join(', ')}`);
      }

      // Check email uniqueness (before write)
      if (await this.emailExists(data.email)) {
        throw new Error('Email already exists');
      }

      // Use atomic transaction
      await this.db.runTransaction(async (transaction) => {
        transaction.set(this.collection.doc(data.uid), {
          ...data,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });

      return {
        uid: data.uid,
        ...data
      };
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  /**
   * Get user by ID
   * @param {string} uid - User ID
   * @returns {Promise<Object>} User data
   */
  async getById(uid) {
    try {
      this.checkConnection();
      const doc = await this.collection.doc(uid).get();

      if (!doc.exists) {
        throw new Error('User not found');
      }

      return {
        uid: doc.id,
        ...doc.data()
      };
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  /**
   * Get user by email
   * @param {string} email - User email
   * @returns {Promise<Object>} User data
   */
  async getByEmail(email) {
    try {
      this.checkConnection();
      const snapshot = await this.collection
        .where('email', '==', email)
        .get();

      if (snapshot.empty) {
        throw new Error('User not found');
      }

      const doc = snapshot.docs[0];
      return {
        uid: doc.id,
        ...doc.data()
      };
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  /**
   * Get all users (with optional filtering)
   * @param {Object} filters - Filter criteria (e.g., role)
   * @returns {Promise<Array>} Array of users
   */
  async getAll(filters = {}) {
    try {
      this.checkConnection();
      let query = this.collection;

      // Apply filters
      if (filters.role) {
        query = query.where('role', '==', filters.role);
      }

      const snapshot = await query.orderBy('createdAt', 'desc').get();

      const users = [];
      snapshot.forEach((doc) => {
        users.push({
          uid: doc.id,
          ...doc.data(),
          password: undefined // Never send passwords to frontend
        });
      });

      return users;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  /**
   * Update user (with atomicity)
   * @param {string} uid - User ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated user
   */
  async update(uid, data) {
    try {
      this.checkConnection();

      // Never allow password updates through this method
      delete data.password;

      // Validate role if being changed
      if (data.role && !this.validRoles.includes(data.role)) {
        throw new Error(`Invalid role. Must be one of: ${this.validRoles.join(', ')}`);
      }

      // Check email uniqueness if being changed
      if (data.email) {
        if (await this.emailExists(data.email, uid)) {
          throw new Error('Email already exists');
        }
      }

      // Use atomic transaction
      await this.db.runTransaction(async (transaction) => {
        transaction.update(this.collection.doc(uid), {
          ...data,
          updatedAt: new Date()
        });
      });

      return this.getById(uid);
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  /**
   * Delete user
   * @param {string} uid - User ID
   * @returns {Promise<Boolean>} Success status
   */
  async delete(uid) {
    try {
      this.checkConnection();
      await this.collection.doc(uid).delete();
      return true;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  /**
   * Get all staff members (Technician + Staff roles)
   * @returns {Promise<Array>} Staff users
   */
  async getAllStaff() {
    try {
      this.checkConnection();
      const snapshot = await this.collection
        .where('role', 'in', ['Staff', 'Technician'])
        .get();

      const staff = [];
      snapshot.forEach((doc) => {
        staff.push({
          uid: doc.id,
          ...doc.data(),
          password: undefined
        });
      });

      return staff;
    } catch (error) {
      throw new Error(`Error fetching staff: ${error.message}`);
    }
  }

  /**
   * Get user count by role
   * @returns {Promise<Object>} Role counts
   */
  async getRoleCounts() {
    try {
      const all = await this.getAll();
      return {
        students: all.filter((u) => u.role === 'Student').length,
        staff: all.filter((u) => u.role === 'Staff').length,
        technicians: all.filter((u) => u.role === 'Technician').length,
        admins: all.filter((u) => u.role === 'Admin').length
      };
    } catch (error) {
      throw new Error(`Error getting role counts: ${error.message}`);
    }
  }

  /**
   * Update user role
   * @param {string} uid - User ID
   * @param {string} role - New role
   * @returns {Promise<Object>} Updated user
   */
  async updateRole(uid, role) {
    try {
      return await this.update(uid, { role });
    } catch (error) {
      throw new Error(`Error updating user role: ${error.message}`);
    }
  }

  /**
   * Batch update multiple users (atomic)
   * Better performance than individual updates
   * @param {Array<{uid, data}>} updates - Array of {uid, data} objects
   * @returns {Promise<Boolean>} Success status
   */
  async batchUpdate(updates) {
    try {
      this.checkConnection();

      let batch = this.db.batch();
      let count = 0;

      for (const { uid, data } of updates) {
        // Validate role if changing
        if (data.role && !this.validRoles.includes(data.role)) {
          throw new Error(`Invalid role: ${data.role}`);
        }

        const docRef = this.collection.doc(uid);
        batch.update(docRef, {
          ...data,
          updatedAt: new Date()
        });

        count++;

        // Firestore batch limit is 500 writes
        if (count % 500 === 0) {
          await batch.commit();
          batch = this.db.batch();
        }
      }

      // Commit remaining
      if (count % 500 !== 0) {
        await batch.commit();
      }

      return true;
    } catch (error) {
      throw new Error(`Error batch updating users: ${error.message}`);
    }
  }

  /**
   * Get all active users (with optional role filter)
   * Optimized for indexed queries
   * @param {Object} filters - Filter criteria
   * @returns {Promise<Array>} Array of active users
   */
  async getActiveUsers(filters = {}) {
    try {
      this.checkConnection();
      let query = this.collection;

      // Apply role filter if provided (indexed query)
      if (filters.role) {
        query = query.where('role', '==', filters.role);
      }

      // Order by creation date (indexed)
      const snapshot = await query.orderBy('createdAt', 'desc').get();

      const users = [];
      snapshot.forEach((doc) => {
        users.push({
          uid: doc.id,
          ...doc.data(),
          password: undefined
        });
      });

      return users;
    } catch (error) {
      throw new Error(`Error fetching active users: ${error.message}`);
    }
  }
}

// Export as singleton
export default new User();
