import { useState, useRef } from 'react';
import { X, MapPin, FileText, Tag, Image as ImageIcon, Upload } from 'lucide-react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  validateDescription,
  validateLocation,
  validateFileSize,
  validateFileType,
  sanitizeInput
} from '../security';

interface ServiceRequestFormProps {
  studentId: string;
  studentName: string;
  onSubmit: (data: { category: string; description: string; location: string }) => void;
  onCancel: () => void;
}

const categories = [
  'Electrical',
  'Internet',
  'Hostel',
  'Classroom',
  'Plumbing',
  'Other'
];

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

export function ServiceRequestForm({ studentId, studentName, onSubmit, onCancel }: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    category: 'Electrical',
    description: '',
    location: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (!file) {
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Only JPG and PNG images are allowed');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    // Validate file size (2MB max)
    if (file.size > MAX_FILE_SIZE) {
      setError('Image size must be less than 2MB');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // ===== SECURITY: Input Validation =====
    // Validate description
    if (!validateDescription(formData.description)) {
      setError('Description must be between 5 and 5000 characters');
      setIsSubmitting(false);
      return;
    }

    // Validate location
    if (!validateLocation(formData.location)) {
      setError('Location must be between 3 and 200 characters');
      setIsSubmitting(false);
      return;
    }

    // Validate category
    const validCategories = ['Electrical', 'Internet', 'Hostel', 'Classroom', 'Plumbing', 'Other'];
    if (!validCategories.includes(formData.category)) {
      setError('Invalid category selected');
      setIsSubmitting(false);
      return;
    }

    // ===== SECURITY: Input Sanitization =====
    const sanitizedDescription = sanitizeInput(formData.description);
    const sanitizedLocation = sanitizeInput(formData.location);

    try {
      const now = new Date();
      const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
      const randomPart = Math.floor(100 + Math.random() * 900);
      const ticketNumber = `REQ-${datePart}-${randomPart}`;

      let imageUrl: string | undefined = undefined;

      // Upload image to Firebase Storage if selected
      if (selectedFile) {
        // ===== SECURITY: File Validation =====
        if (!validateFileSize(selectedFile.size, 2)) {
          setError('Image size must be less than 2MB');
          setIsSubmitting(false);
          return;
        }

        if (!validateFileType(selectedFile.type, ['image/jpeg', 'image/png'])) {
          setError('Only JPG and PNG images are allowed');
          setIsSubmitting(false);
          return;
        }

        try {
          const timestamp = Date.now();
          const fileName = `requests/${studentId}/${ticketNumber}_${timestamp}`;
          const storageRef = ref(storage, fileName);

          // Upload with timeout
          const uploadTask = uploadBytes(storageRef, selectedFile);
          const uploadPromise = Promise.race([
            uploadTask,
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Upload timeout')), 30000)
            )
          ]);

          await uploadPromise;
          imageUrl = await getDownloadURL(storageRef);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (uploadErr) {
          console.error('Image upload failed:', uploadErr);
          setError('Image upload failed, but request will be saved without image.');
          imageUrl = undefined;
        }
      }

      // Save to Firestore with validated and sanitized data
      const requestsCollection = collection(db, 'service_requests');
      await addDoc(requestsCollection, {
        ticketNumber,
        category: formData.category, // Already validated against whitelist
        description: sanitizedDescription,
        location: sanitizedLocation,
        studentId: studentId, // From authenticated user
        studentName: sanitizeInput(studentName), // From authenticated user
        status: 'Pending',
        dateSubmitted: now.toISOString(),
        imageUrl: imageUrl || null,  // null is safe for Firestore; undefined is not
        statusUpdates: [
          {
            status: 'Pending',
            timestamp: now.toISOString(),
            note: 'Request submitted'
          }
        ]
      });

      console.log('Request saved to Firestore');
      onSubmit(formData);
      setFormData({ category: 'Electrical', description: '', location: '' });
      setSelectedFile(null);
      setImagePreview('');
      setError('');
    } catch (err) {
      console.error('Error saving request:', err);
      setError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Raise New Service Request</h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
              <span className="font-medium">⚠</span>
              {error}
            </div>
          )}

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Tag className="w-4 h-4" />
              Category
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4" />
              Description
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={5}
              placeholder="Please describe the issue in detail..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Provide as much detail as possible to help us resolve your issue quickly
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Building A, Room 301"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <p className="text-xs text-gray-500 mt-1">
              Specify the exact location where the issue is occurring
            </p>
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <ImageIcon className="w-4 h-4" />
              Attach Image <span className="text-xs text-gray-500 font-normal">(Optional)</span>
            </label>

            {!imagePreview ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Click to upload image</p>
                <p className="text-xs text-gray-500 mt-1">JPG or PNG • Max 2MB</p>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{selectedFile?.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {(selectedFile?.size || 0) / 1024 < 1024
                        ? `${((selectedFile?.size || 0) / 1024).toFixed(1)} KB`
                        : `${((selectedFile?.size || 0) / 1024 / 1024).toFixed(1)} MB`}
                    </p>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="text-sm text-red-600 hover:text-red-700 mt-2 font-medium"
                    >
                      Remove Image
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-xs text-gray-500 mt-2">
              Images help technicians better understand the issue and provide faster resolution.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
