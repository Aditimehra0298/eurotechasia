// Form service that sends data in the correct format for Google Apps Script
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

    // Create a form and submit it directly to Google Apps Script
    // This approach avoids CORS issues and sends data in the correct format
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SHEETS_URL;
    form.target = '_blank'; // Open in new tab to avoid navigation
    form.style.display = 'none';

    // Add each field as a hidden input
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

    // Return success immediately
    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}; 