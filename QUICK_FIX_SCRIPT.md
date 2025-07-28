# 🚀 Quick Fix for JSON Parsing Error

## The Problem
Your Google Apps Script is receiving form data (`name=Aditi&email=...`) but trying to parse it as JSON, causing the error: `"name=Aditi&" is not valid JSON`

## Quick Fix: Updated Google Apps Script Code

Replace your current Google Apps Script code with this:

```javascript
// Replace this with your actual Google Sheet URL
const SPREADSHEET_URL = 'YOUR_GOOGLE_SHEET_URL_HERE';

function doPost(e) {
  try {
    console.log('Received POST request');
    
    // Parse the incoming data - handle both JSON and form data
    let data;
    
    if (e.postData && e.postData.type === 'application/json') {
      // Handle JSON data
      data = JSON.parse(e.postData.contents);
      console.log('Parsed JSON data:', data);
    } else {
      // Handle form data (this is what you're getting)
      const formData = e.parameter;
      console.log('Received form data:', formData);
      
      data = {
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        industry: formData.industry || '',
        companyName: formData.companyName || '',
        location: formData.location || '',
        message: formData.message || '',
        formSource: formData.formSource || 'Website Form',
        timestamp: formData.timestamp || new Date().toISOString()
      };
      console.log('Processed form data:', data);
    }

    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Opened spreadsheet:', spreadsheet.getName());

    // Add headers if they don't exist
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Industry',
      'Company Name',
      'Location',
      'Message',
      'Form Source'
    ];
    
    // Check if headers exist, if not add them
    const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    if (!firstRow[0] || firstRow[0] !== 'Timestamp') {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      console.log('Added headers to sheet');
    }

    // Add data to spreadsheet
    const row = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.industry || '',
      data.companyName || '',
      data.location || '',
      data.message || '',
      data.formSource || 'Website Form'
    ];
    
    sheet.appendRow(row);
    console.log('Added row to sheet:', row);

    // Send email notification
    sendEmailNotification(data);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully!',
        rowAdded: row
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  try {
    // Email configuration
    const recipientEmail = 'your-email@gmail.com'; // Replace with your email
    const subject = 'New CE Mark Inquiry - ' + data.name;
    
    // Create email body
    const emailBody = `
New CE Mark inquiry received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Industry: ${data.industry}
Company: ${data.companyName}
Location: ${data.location}
Message: ${data.message}
Form Source: ${data.formSource}
Timestamp: ${data.timestamp}

---
This email was sent automatically from your CE Mark website.
    `;

    // Send email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });

    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Test function
function testFormData() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    industry: 'Test Industry',
    companyName: 'Test Company',
    location: 'Test Location',
    message: 'Test message',
    formSource: 'Test',
    timestamp: new Date().toISOString()
  };
  
  console.log('Test data:', testData);
  return testData;
}
```

## Setup Instructions

### Step 1: Update Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Find your project
3. Replace the code with the above
4. **Replace `YOUR_GOOGLE_SHEET_URL_HERE`** with your actual Google Sheet URL
5. **Replace `your-email@gmail.com`** with your email address
6. Save the script

### Step 2: Deploy the Script
1. Click "Deploy" → "New deployment"
2. Choose "Web app"
3. Set access to "Anyone"
4. Click "Deploy"
5. Copy the new URL

### Step 3: Test
1. Run `testFormData()` function to test
2. Submit a form on your website
3. Check Google Sheet for data
4. Check email for notification

## What This Fix Does

- ✅ **Handles form data correctly** (not JSON)
- ✅ **Adds proper error handling**
- ✅ **Includes detailed logging**
- ✅ **Sends email notifications**
- ✅ **Adds headers automatically**
- ✅ **Works with your current form setup**

## Expected Result

After this fix:
- No more JSON parsing errors
- Form data appears in Google Sheet
- Email notifications sent
- Professional error handling

**This should fix your JSON parsing error immediately!** 🎉 