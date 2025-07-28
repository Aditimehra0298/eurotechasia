# 📧 Google Apps Script Email Notification Setup

## The Problem
Your Google Apps Script is not sending email notifications when forms are submitted.

## Solution: Add Email Notification Code

### Step 1: Access Your Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Find your project (the one with URL ending in `/exec`)
3. Click on it to open the editor

### Step 2: Replace Your Current Code
Replace your current Google Apps Script code with this:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    let data;
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      // Handle form data
      const formData = e.parameter;
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
    }

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
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

    // Send email notification
    sendEmailNotification(data);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
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

// Test function to verify email setup
function testEmail() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    industry: 'Test Industry',
    companyName: 'Test Company',
    location: 'Test Location',
    message: 'This is a test message',
    formSource: 'Test',
    timestamp: new Date().toISOString()
  };
  
  sendEmailNotification(testData);
}
```

### Step 3: Configure Email Settings
1. **Replace `your-email@gmail.com`** with your actual email address
2. **Save the script** (Ctrl+S or Cmd+S)
3. **Deploy the script**:
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set access to "Anyone"
   - Click "Deploy"

### Step 4: Test Email Notifications
1. In the Google Apps Script editor, run the `testEmail()` function
2. Check your email for the test notification
3. If you receive it, the setup is working!

### Step 5: Update Your Backend (if using Render)
If you deployed your backend to Render, update the environment variable:
- `GOOGLE_SHEETS_URL`: Your new script URL

## Troubleshooting

### If emails don't arrive:
1. **Check spam folder**
2. **Verify email address** is correct
3. **Check Google Apps Script logs**:
   - View → Execution log
   - Look for email errors

### If you get permission errors:
1. **Authorize the script** when prompted
2. **Enable Gmail API** if needed
3. **Check Google account permissions**

### Common Issues:
- **Quota limits**: Google Apps Script has daily email limits
- **Spam filters**: Check your email provider's spam settings
- **Script permissions**: Make sure the script can send emails

## Expected Result
After setup:
- ✅ Form submissions save to Google Sheets
- ✅ Email notifications sent to your email
- ✅ Professional notification format
- ✅ Error handling and logging

## Test Your Setup
1. Submit a test form on your website
2. Check your email for notification
3. Verify data appears in Google Sheets
4. Check script logs for any errors 