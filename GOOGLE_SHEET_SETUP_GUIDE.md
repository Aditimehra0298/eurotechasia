# 📊 Google Sheet Setup Guide - Fix Data Not Appearing

## The Problem
Your form submissions are not appearing in your Google Sheet, even though the script is running.

## Complete Setup Solution

### Step 1: Create/Connect Google Sheet

**Option A: Create New Sheet**
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it "CE Mark Inquiries" or similar
4. Copy the URL (you'll need this)

**Option B: Use Existing Sheet**
1. Open your existing Google Sheet
2. Copy the URL from the address bar

### Step 2: Set Up Google Apps Script

1. **Go to [script.google.com](https://script.google.com)**
2. **Create New Project** (if you don't have one):
   - Click "New project"
   - Name it "CE Mark Form Handler"

3. **Replace the code** with this complete setup:

```javascript
// Replace this with your actual Google Sheet URL
const SPREADSHEET_URL = 'YOUR_GOOGLE_SHEET_URL_HERE';

function doPost(e) {
  try {
    console.log('Received POST request');
    
    // Parse the incoming data
    let data;
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
      console.log('Parsed JSON data:', data);
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
      console.log('Parsed form data:', data);
    }

    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Opened spreadsheet:', spreadsheet.getName());
    console.log('Active sheet:', sheet.getName());

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

// Test function to verify sheet connection
function testSheetConnection() {
  try {
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadsheet.getActiveSheet();
    
    // Add a test row
    const testRow = [
      new Date().toISOString(),
      'Test User',
      'test@example.com',
      '1234567890',
      'Test Industry',
      'Test Company',
      'Test Location',
      'This is a test message',
      'Test Function'
    ];
    
    sheet.appendRow(testRow);
    console.log('Test row added successfully');
    
    return 'Test successful! Check your Google Sheet.';
  } catch (error) {
    console.error('Test failed:', error);
    return 'Test failed: ' + error.toString();
  }
}

// Function to manually add headers
function addHeaders() {
  try {
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadsheet.getActiveSheet();
    
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
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    console.log('Headers added successfully');
    
    return 'Headers added successfully!';
  } catch (error) {
    console.error('Error adding headers:', error);
    return 'Error: ' + error.toString();
  }
}
```

### Step 3: Configure the Script

1. **Replace `YOUR_GOOGLE_SHEET_URL_HERE`** with your actual Google Sheet URL
2. **Replace `your-email@gmail.com`** with your email address
3. **Save the script** (Ctrl+S or Cmd+S)

### Step 4: Set Up Permissions

1. **Run the `addHeaders()` function** first:
   - Select `addHeaders` from the function dropdown
   - Click the "Run" button
   - Authorize the script when prompted
   - Check your Google Sheet for headers

2. **Test the connection**:
   - Run the `testSheetConnection()` function
   - Check your Google Sheet for a test row
   - If successful, you'll see "Test User" data

### Step 5: Deploy the Script

1. **Click "Deploy"** → "New deployment"
2. **Choose "Web app"**
3. **Configure**:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. **Click "Deploy"**
5. **Copy the Web app URL** (ends with `/exec`)

### Step 6: Update Your Website

1. **Update your form service** with the new script URL
2. **Test form submission** on your website
3. **Check Google Sheet** for new data

## Troubleshooting

### If data still doesn't appear:

1. **Check Script Logs**:
   - View → Execution log
   - Look for errors or success messages

2. **Verify Sheet URL**:
   - Make sure the URL is correct
   - Ensure you have edit access to the sheet

3. **Check Permissions**:
   - Make sure the script is authorized
   - Check if you can manually edit the sheet

4. **Test Step by Step**:
   - Run `addHeaders()` first
   - Then run `testSheetConnection()`
   - Finally test form submission

### Common Issues:

- **Wrong Sheet URL**: Double-check the URL format
- **Permission Denied**: Make sure you own the sheet or have edit access
- **Script Not Deployed**: Ensure the script is deployed as a web app
- **Headers Missing**: Run `addHeaders()` function first

## Expected Result

After proper setup:
- ✅ Headers appear in Google Sheet
- ✅ Test data appears when running test function
- ✅ Form submissions save to Google Sheet
- ✅ Email notifications sent
- ✅ Logs show successful operations

## Test Your Setup

1. Run `addHeaders()` - should add column headers
2. Run `testSheetConnection()` - should add test row
3. Submit form on website - should add real data
4. Check email for notification

If all steps work, your setup is complete! 