// Temporary solution: Direct Google Sheets submission
// TODO: Replace with your actual backend URL once deployed
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

    // Direct submission to Google Sheets (temporary solution)
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      return { success: true, message: 'Form submitted successfully!' };
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
}; 