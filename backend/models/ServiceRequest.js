// ============================================
// SERVICE REQUEST MODEL
// Handles all database operations for service requests
// ============================================

import { getDb, isFirebaseConnected } from '../config/database.js';

/**
 * ServiceRequest Model
 * All methods interact with Firestore 'service_requests' collection
 * Includes validation, atomic transactions, and consistency checks
 */
class ServiceRequest {
  constructor() {
    const db = getDb();
    this.db = db;
    this.collection = db ? db.collection('service_requests') : null;
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
   * Valid status values
   */
  get validStatuses() {
    return ['Pending', 'In Progress', 'Resolved', 'Rejected'];
  }

  /**
   * Check if status transition is allowed
   */
  isValidStatusTransition(oldStatus, newStatus) {
    const transitions = {
      'Pending': ['In Progress', 'Rejected'],
      'In Progress': ['Resolved', 'Pending'],
      'Resolved': ['Pending'],
      'Rejected': ['Pending']
    };
    return transitions[oldStatus]?.includes(newStatus) ?? false;
  }

  /**
   * Create a new service request
   * @param {Object} data - Request data
   * @returns {Promise<Object>} Created request with ID
   */
  async create(data) {
    try {
      this.checkConnection();
      const docRef = await this.collection.add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'Pending'
      });

      return {
        id: docRef.id,
        ...data
      };
    } catch (error) {
      throw new Error(`Error creating service request: ${error.message}`);
    }
  }

  /**
   * Get all service requests (with optional filtering)
   * @param {Object} filters - Filter criteria (e.g., status, studentId)
   * @returns {Promise<Array>} Array of requests
   */
  async getAll(filters = {}) {
    try {
      this.checkConnection();
      let query = this.collection;

      // Apply filters
      if (filters.status) {
        query = query.where('status', '==', filters.status);
      }
      if (filters.studentId) {
        query = query.where('studentId', '==', filters.studentId);
      }
      if (filters.assignedTo) {
        query = query.where('assignedTo', '==', filters.assignedTo);
      }

      const snapshot = await query.orderBy('createdAt', 'desc').get();

      const requests = [];
      snapshot.forEach((doc) => {
        requests.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return requests;
    } catch (error) {
      throw new Error(`Error fetching service requests: ${error.message}`);
    }
  }

  /**
   * Get a single service request by ID
   * @param {string} id - Request ID
   * @returns {Promise<Object>} Request data
   */
  async getById(id) {
    try {
      this.checkConnection();
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error('Service request not found');
      }

      return {
        id: doc.id,
        ...doc.data()
      };
    } catch (error) {
      throw new Error(`Error fetching service request: ${error.message}`);
    }
  }

  /**
   * Update a service request with atomic transaction
   * Ensures consistency (e.g., validates status transitions)
   * @param {string} id - Request ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated request
   */
  async update(id, data) {
    try {
      this.checkConnection();

      // Fetch current document to validate transitions
      const currentDoc = await this.collection.doc(id).get();
      if (!currentDoc.exists) {
        throw new Error('Service request not found');
      }

      const currentData = currentDoc.data();

      // Validate status transition if status is being changed
      if (data.status && data.status !== currentData.status) {
        if (!this.isValidStatusTransition(currentData.status, data.status)) {
          throw new Error(
            `Invalid status transition: ${currentData.status} → ${data.status}`
          );
        }
      }

      // Use atomic transaction for consistency
      await this.db.runTransaction(async (transaction) => {
        transaction.update(this.collection.doc(id), {
          ...data,
          updatedAt: new Date()
        });
      });

      return this.getById(id);
    } catch (error) {
      throw new Error(`Error updating service request: ${error.message}`);
    }
  }

  /**
   * Delete a service request
   * @param {string} id - Request ID
   * @returns {Promise<Boolean>} Success status
   */
  async delete(id) {
    try {
      this.checkConnection();
      await this.collection.doc(id).delete();
      return true;
    } catch (error) {
      throw new Error(`Error deleting service request: ${error.message}`);
    }
  }

  /**
   * Assign a request to staff member
   * @param {string} id - Request ID
   * @param {string} staffId - Staff member ID
   * @returns {Promise<Object>} Updated request
   */
  async assignToStaff(id, staffId) {
    try {
      return await this.update(id, {
        assignedTo: staffId,
        status: 'In Progress'
      });
    } catch (error) {
      throw new Error(`Error assigning request: ${error.message}`);
    }
  }

  /**
   * Mark request as resolved
   * @param {string} id - Request ID
   * @param {string} notes - Resolution notes
   * @returns {Promise<Object>} Updated request
   */
  async resolve(id, notes = '') {
    try {
      return await this.update(id, {
        status: 'Resolved',
        resolutionNotes: notes,
        resolvedAt: new Date()
      });
    } catch (error) {
      throw new Error(`Error resolving request: ${error.message}`);
    }
  }

  /**
   * Get requests by student
   * @param {string} studentId - Student ID
   * @returns {Promise<Array>} Student's requests
   */
  async getByStudent(studentId) {
    try {
      return await this.getAll({ studentId });
    } catch (error) {
      throw new Error(`Error fetching student requests: ${error.message}`);
    }
  }

  /**
   * Get requests assigned to staff
   * @param {string} staffId - Staff ID
   * @returns {Promise<Array>} Assigned requests
   */
  async getAssignedToStaff(staffId) {
    try {
      return await this.getAll({ assignedTo: staffId });
    } catch (error) {
      throw new Error(`Error fetching assigned requests: ${error.message}`);
    }
  }

  /**
   * Count requests by status
   * @returns {Promise<Object>} Status counts
   */
  async getStatusCounts() {
    try {
      const all = await this.getAll();
      return {
        pending: all.filter((r) => r.status === 'Pending').length,
        inProgress: all.filter((r) => r.status === 'In Progress').length,
        resolved: all.filter((r) => r.status === 'Resolved').length
      };
    } catch (error) {
      throw new Error(`Error getting status counts: ${error.message}`);
    }
  }

  /**
   * Batch update multiple requests (atomic)
   * Better performance than individual updates
   * @param {Array<{id, data}>} updates - Array of {id, data} objects
   * @returns {Promise<Boolean>} Success status
   */
  async batchUpdate(updates) {
    try {
      this.checkConnection();

      let batch = this.db.batch();
      let count = 0;

      for (const { id, data } of updates) {
        const docRef = this.collection.doc(id);
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
      throw new Error(`Error batch updating requests: ${error.message}`);
    }
  }

  /**
   * Get requests that need attention (optimized query)
   * Uses index: status, priority, createdAt
   * @returns {Promise<Array>} Pending and in-progress requests
   */
  async getRequestsNeedingAttention(limit = 50) {
    try {
      this.checkConnection();

      const snapshot = await this.collection
        .where('status', 'in', ['Pending', 'In Progress'])
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();

      const requests = [];
      snapshot.forEach((doc) => {
        requests.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return requests;
    } catch (error) {
      throw new Error(`Error fetching requests needing attention: ${error.message}`);
    }
  }

  /**
   * Get requests within date range (for analytics)
   * @param {Date} startDate - Start date
   * @param {Date} endDate - End date
   * @returns {Promise<Array>} Requests in date range
   */
  async getRequestsByDateRange(startDate, endDate) {
    try {
      this.checkConnection();

      const snapshot = await this.collection
        .where('createdAt', '>=', startDate)
        .where('createdAt', '<=', endDate)
        .orderBy('createdAt', 'desc')
        .get();

      const requests = [];
      snapshot.forEach((doc) => {
        requests.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return requests;
    } catch (error) {
      throw new Error(`Error fetching requests by date: ${error.message}`);
    }
  }
}

// Export as singleton
export default new ServiceRequest();
