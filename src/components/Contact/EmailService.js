// Email service configuration
const SERVICE_ID = 'service_jcepij4';
const TEMPLATE_ID = 'template_vcyoc5x';
const PUBLIC_KEY = 'nKixoiBb_S0WJAHdr';

// Enhanced sanitization function
export const sanitizeText = (text) => {
  if (!text) return '';

  return String(text)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#x60;')
    .trim();
};

// Sanitize filename to prevent path traversal and command injection
export const sanitizeFileName = (fileName) => {
  if (!fileName) return '';

  // Remove path traversal elements and dangerous characters
  return String(fileName)
    .replace(/\.\.\//g, '') // Remove path traversal
    .replace(/[/\\]/g, '') // Remove slashes
    .replace(/[<>:"'|?*]/g, '') // Remove reserved characters
    .replace(/^\.+/, '') // Remove leading dots
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Remove control characters
    .trim();
};

// Function to resize and compress image
export const resizeImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        // Calculate new dimensions
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        // Create canvas and resize image
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Get compressed image as DataURL
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Compression quality 0.7

        resolve({
          name: sanitizeFileName(file.name), // Sanitize filename
          type: 'image/jpeg',
          size: Math.round(dataUrl.length * 0.75), // Rough estimate of size
          base64: dataUrl,
        });
      };
    };

    reader.onerror = () => {
      resolve(null); // Return null on error
    };
  });
};

// Send email function with image batching support
export const sendEmail = async (formData) => {
  // Create a template params object that matches your EmailJS template variables
  const templateParams = {
    from_name: sanitizeText(formData.name),
    reply_to: formData.email.trim(), // Email needs to remain functional, just trim it
    phone: sanitizeText(formData.phone),
    message: sanitizeText(formData.message),
    source: sanitizeText(formData.source),
    files_info:
      formData.images.length > 0
        ? `${formData.images.length} file(s) were attached: ${formData.images
            .map((file) => sanitizeFileName(file.name))
            .join(', ')}`
        : 'No files attached',
  };

  try {
    // Process images one by one to keep the data size manageable
    const processedImages = [];

    for (const file of formData.images) {
      // Resize and compress image
      const resizedImage = await resizeImage(file);
      if (resizedImage) {
        processedImages.push(resizedImage);
      }
    }

    // Split images into multiple emails if needed
    const MAX_EMAIL_SIZE = 40 * 1024; // 40KB to be safe
    let currentSize = JSON.stringify(templateParams).length;
    let currentBatch = [];
    let emailBatches = [];

    for (const img of processedImages) {
      const imgSize = img.base64.length;

      // If adding this image would exceed the limit, create a new batch
      if (currentSize + imgSize > MAX_EMAIL_SIZE && currentBatch.length > 0) {
        emailBatches.push(currentBatch);
        currentBatch = [img];
        currentSize = JSON.stringify(templateParams).length + imgSize;
      } else {
        currentBatch.push(img);
        currentSize += imgSize;
      }
    }

    // Add the last batch if it's not empty
    if (currentBatch.length > 0) {
      emailBatches.push(currentBatch);
    }

    // Send emails with batches of images
    for (let i = 0; i < emailBatches.length; i++) {
      const batchParams = { ...templateParams };

      // Add batch info to subject if multiple batches
      if (emailBatches.length > 1) {
        batchParams.subject = sanitizeText(
          `Dental Assessment Request (${i + 1}/${emailBatches.length})`
        );
      }

      batchParams.images = emailBatches[i];

      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: batchParams,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Unknown error occurred');
      }
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
