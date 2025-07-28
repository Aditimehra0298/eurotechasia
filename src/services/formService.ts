// Form service that sends data in the correct format for Google Apps Script
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz02lydQSj2tNOl_2rXDxk00u1h8irkH-JkDjLml7LyFD00wvxwBu0jPbSDdXubndt9/exec';

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

    // Create a hidden iframe to submit the form without navigating away
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden-iframe';
    document.body.appendChild(iframe);

    // Create a form and submit it to the hidden iframe
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SHEETS_URL;
    form.target = 'hidden-iframe';
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
    
    // Clean up after a short delay
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 1000);

    // Return success immediately
    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}; 