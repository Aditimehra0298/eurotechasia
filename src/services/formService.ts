// Form service with backend deployment ready
// TODO: Replace with your actual backend URL once deployed to Render
const BACKEND_URL = 'https://your-backend-url.onrender.com'; // Replace with your actual Render URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwTdbvnXFz-aYYkIQt6iuUwxQ3FVOLc0xWuJl38loFk44reDfGlKNjyZM7xHFpZ4KBA/exec';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  industry: string;
  companyName: string;
  location: string;
  message: string;
  formSource?: string;
}

export const submitForm = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Add timestamp and form source
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      formSource: formData.formSource || 'Website Form'
    };

    // Check if we're in development or if backend URL is set
    const isDevelopment = window.location.hostname === 'localhost';
    const hasBackendUrl = BACKEND_URL !== 'https://your-backend-url.onrender.com';

    if (isDevelopment || !hasBackendUrl) {
      // Fallback: Direct form submission (current approach)
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SHEETS_URL;
      form.target = '_blank';
      form.style.display = 'none';

      // Add form data as hidden inputs
      Object.entries(submissionData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      return { success: true, message: 'Form submitted successfully!' };
    } else {
      // Production: Use backend API
      const response = await fetch(`${BACKEND_URL}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      return result;
    }
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}; 