// Use production API URL when deployed, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://your-backend-url.onrender.com');

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
    const response = await fetch(`${API_BASE_URL}/api/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }

    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}; 