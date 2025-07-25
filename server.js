import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets Web App URL - Working URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwTdbvnXFz-aYYkIQt6iuUwxQ3FVOLc0xWuJl38loFk44reDfGlKNjyZM7xHFpZ4KBA/exec';

// Handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    
    // Add timestamp and form source
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      formSource: formData.formSource || 'Website Form'
    };

    // Send data to Google Sheets
    const response = await axios.post(GOOGLE_SHEETS_URL, submissionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.success) {
      res.json({ success: true, message: 'Form submitted successfully!' });
    } else {
      throw new Error('Google Sheets submission failed');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit form. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Google Sheets URL: ${GOOGLE_SHEETS_URL}`);
}); 