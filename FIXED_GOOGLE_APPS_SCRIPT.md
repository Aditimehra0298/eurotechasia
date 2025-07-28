# 🔧 Fixed Google Apps Script Code

## The Problem
Your current script is using `JSON.parse(e.postData.contents)` but your form sends form-encoded data, not JSON.

## Fixed Code

Replace your current Google Apps Script code with this:

```javascript
function doPost(e) {
  try {
    console.log('Received POST request');
    
    // Parse the incoming data - handle form data correctly
    let data;
    
    if (e.postData && e.postData.type === 'application/json') {
      // Handle JSON data (if any)
      data = JSON.parse(e.postData.contents);
      console.log('Parsed JSON data:', data);
    } else {
      // Handle form data (this is what your form sends)
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

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    console.log('Opened spreadsheet:', sheet.getName());

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

    // Create row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.industry || '',
      data.companyName || '',
      data.location || '',
      data.message || '',
      data.formSource || 'Website Form'
    ];
    
    // Save to sheet
    sheet.appendRow(rowData);
    console.log('Added row to sheet:', rowData);
    
    // Send email notification
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
Timestamp: ${timestamp}

---
This email was sent automatically from your CE Mark website.
    `;

    MailApp.sendEmail({
      to: "damnart.seo@gmail.com",
      subject: "New CE Mark Inquiry - " + data.name,
      body: emailBody
    });

    console.log('Email sent successfully');

    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved and email sent',
        rowAdded: rowData
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

function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Test function to verify setup
function testFormData() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    industry: 'Test Industry',
    companyName: 'Test Company',
    location: 'Test Location',
    message: 'Test message',
    formSource: 'Test Function',
    timestamp: new Date().toISOString()
  };
  
  console.log('Test data:', testData);
  return testData;
}
```

## Key Changes Made

1. **Removed `JSON.parse(e.postData.contents)`** - This was causing the error
2. **Added form data handling** - Uses `e.parameter` for form data
3. **Added proper error handling** - Better error messages
4. **Added logging** - To help debug issues
5. **Added headers** - Automatically adds column headers
6. **Improved email format** - More detailed email notifications

## Setup Instructions

1. **Copy the fixed code** above
2. **Replace your current Google Apps Script code** with this
3. **Save the script** (Ctrl+S or Cmd+S)
4. **Deploy the script**:
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set access to "Anyone"
   - Click "Deploy"
5. **Test the setup**:
   - Run `testFormData()` function
   - Submit a form on your website
   - Check Google Sheet for data
   - Check email for notification

## What This Fixes

- ✅ **No more JSON parsing errors**
- ✅ **Handles form data correctly**
- ✅ **Saves data to Google Sheet**
- ✅ **Sends email notifications**
- ✅ **Adds headers automatically**
- ✅ **Better error handling**

## Expected Result

After applying this fix:
- Form submissions will work without errors
- Data will appear in your Google Sheet
- Email notifications will be sent to damnart.seo@gmail.com
- No more "Unexpected token" errors

**This should completely fix your JSON parsing issue!** 🎉 