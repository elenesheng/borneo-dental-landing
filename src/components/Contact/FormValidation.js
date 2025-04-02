// Validation rules and functions for the contact form

/**
 * Validates the entire form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation errors object
 */
export const validateForm = (formData) => {
  const errors = {};

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate phone format (basic validation)
  const phoneRegex = /^\+?[0-9\s-()]{8,20}$/;
  if (!phoneRegex.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Validate name
  if (formData.name.trim().length < 2) {
    errors.name = 'Name is too short';
  }

  // Validate message
  if (formData.message.trim().length < 10) {
    errors.message = 'Please provide more details in your message';
  }

  // Validate that at least one image is uploaded
  if (formData.images.length === 0) {
    errors.images = 'Please upload at least one photo of your teeth';
  }

  return errors;
};

/**
 * Validates file types
 * @param {File[]} files - Array of files to validate
 * @returns {Object} - Validation result with valid files and error message
 */
export const validateFileTypes = (files) => {
  // Valid image types
  const validImageTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
  ];

  // Check if all files are valid image types
  const allValid = files.every((file) => validImageTypes.includes(file.type));

  // Filter only valid files
  const validFiles = files.filter((file) =>
    validImageTypes.includes(file.type)
  );

  return {
    allValid,
    validFiles,
    error: !allValid ? 'Please upload only image files (JPEG, PNG, GIF)' : null,
  };
};

/**
 * Checks if uploaded files are too large
 * @param {File[]} files - Array of files to check
 * @param {number} sizeLimit - Size limit in bytes (default 2MB)
 * @returns {Object} - Result with boolean and error message
 */
export const checkFileSizes = (files, sizeLimit = 2 * 1024 * 1024) => {
  const largeFiles = files.filter((file) => file.size > sizeLimit);

  return {
    hasLargeFiles: largeFiles.length > 0,
    error:
      largeFiles.length > 0
        ? 'Some images are very large, which may cause issues when sending. Consider using smaller images.'
        : null,
  };
};
