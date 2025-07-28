# 🔍 Diagnostic Script for Google Apps Script Issues

## Quick Diagnostic Tool

Add this function to your Google Apps Script to diagnose issues:

```javascript
function diagnoseIssues() {
  const results = [];
  
  try {
    // Test 1: Check if script can access Google Sheets
    results.push("=== Test 1: Google Sheets Access ===");
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    results.push("✅ Successfully opened spreadsheet: " + spreadsheet.getName());
    
    const sheet = spreadsheet.getActiveSheet();
    results.push("✅ Successfully accessed sheet: " + sheet.getName());
    
    // Test 2: Check if we can read from sheet
    results.push("\n=== Test 2: Read Access ===");
    const lastRow = sheet.getLastRow();
    results.push("✅ Last row in sheet: " + lastRow);
    
    if (lastRow > 0) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, 9).getValues()[0];
      results.push("✅ Last row data: " + JSON.stringify(lastRowData));
    }
    
    // Test 3: Check if we can write to sheet
    results.push("\n=== Test 3: Write Access ===");
    const testData = [
      new Date().toISOString(),
      'Diagnostic Test',
      'test@diagnostic.com',
      '1234567890',
      'Diagnostic Industry',
      'Diagnostic Company',
      'Diagnostic Location',
      'This is a diagnostic test',
      'Diagnostic Function'
    ];
    
    sheet.appendRow(testData);
    results.push("✅ Successfully wrote test data to sheet");
    
    // Test 4: Check email permissions
    results.push("\n=== Test 4: Email Permissions ===");
    try {
      MailApp.sendEmail({
        to: 'your-email@gmail.com', // Replace with your email
        subject: 'Diagnostic Test - CE Mark Website',
        body: 'This is a diagnostic test email from your Google Apps Script.'
      });
      results.push("✅ Email sent successfully");
    } catch (emailError) {
      results.push("❌ Email error: " + emailError.toString());
    }
    
    // Test 5: Check script permissions
    results.push("\n=== Test 5: Script Permissions ===");
    const scriptProperties = PropertiesService.getScriptProperties();
    results.push("✅ Script properties accessible");
    
    // Test 6: Check URL format
    results.push("\n=== Test 6: URL Format ===");
    if (SPREADSHEET_URL.includes('docs.google.com/spreadsheets')) {
      results.push("✅ Spreadsheet URL format is correct");
    } else {
      results.push("❌ Spreadsheet URL format may be incorrect");
    }
    
  } catch (error) {
    results.push("❌ Critical error: " + error.toString());
    results.push("Stack trace: " + error.stack);
  }
  
  // Log all results
  console.log(results.join('\n'));
  
  // Return results for display
  return results.join('\n');
}

// Function to check current script configuration
function checkConfiguration() {
  const config = {
    spreadsheetUrl: SPREADSHEET_URL,
    scriptUrl: ScriptApp.getService().getUrl(),
    scriptId: ScriptApp.getScriptId(),
    userEmail: Session.getActiveUser().getEmail(),
    timeZone: Session.getScriptTimeZone()
  };
  
  console.log('Current Configuration:', JSON.stringify(config, null, 2));
  return config;
}

// Function to test form data parsing
function testDataParsing() {
  // Simulate form data
  const mockFormData = {
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
  
  console.log('Mock form data:', JSON.stringify(mockFormData, null, 2));
  
  // Test the same processing logic as doPost
  const row = [
    mockFormData.timestamp,
    mockFormData.name,
    mockFormData.email,
    mockFormData.phone,
    mockFormData.industry,
    mockFormData.companyName,
    mockFormData.location,
    mockFormData.message,
    mockFormData.formSource
  ];
  
  console.log('Processed row data:', JSON.stringify(row, null, 2));
  return row;
}
```

## How to Use the Diagnostic Script

### Step 1: Add the Diagnostic Functions
1. Copy the diagnostic functions above
2. Add them to your Google Apps Script
3. Save the script

### Step 2: Run Diagnostics
1. **Run `checkConfiguration()`** - Shows your current setup
2. **Run `testDataParsing()`** - Tests data processing
3. **Run `diagnoseIssues()`** - Comprehensive diagnostic

### Step 3: Check Results
1. **View → Execution log** to see detailed results
2. **Look for ✅ (success) and ❌ (error) markers**
3. **Check your Google Sheet** for test data
4. **Check your email** for test email

## Common Issues and Solutions

### Issue: "Spreadsheet not found"
**Solution**: Check your `SPREADSHEET_URL` - make sure it's the full URL from your Google Sheet

### Issue: "Permission denied"
**Solution**: 
1. Make sure you own the Google Sheet
2. Or share the sheet with your Google account
3. Re-authorize the script

### Issue: "Script not deployed"
**Solution**: 
1. Deploy as Web app
2. Set access to "Anyone"
3. Copy the new deployment URL

### Issue: "Email not sent"
**Solution**:
1. Check if you replaced `your-email@gmail.com` with your actual email
2. Check spam folder
3. Verify email permissions in script

## Quick Fix Checklist

- [ ] Google Sheet URL is correct
- [ ] Script is deployed as Web app
- [ ] Script has proper permissions
- [ ] Email address is set correctly
- [ ] Headers are added to Google Sheet
- [ ] Test functions run successfully

Run the diagnostic script and share the results if you're still having issues! 