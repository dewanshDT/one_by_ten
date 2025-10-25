# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "1/10 Email Signups" (or any name you prefer)
4. Add these headers in the first row:
   - A1: `Timestamp`
   - B1: `Email`
   - C1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    var email = data.email;

    // Get current timestamp
    var timestamp = new Date();

    // Append the data to the sheet
    sheet.appendRow([timestamp, email, "Website Form"]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Email added successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Click **Deploy** > **New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Configure:
   - Description: "1/10 Email Collection"
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**
10. Click **Authorize access** and grant permissions
11. **COPY THE WEB APP URL** - you'll need this!
    - It looks like: `https://script.google.com/macros/s/AKfycby.../exec`

## Step 3: Add the URL to your Next.js app

Copy your Web App URL and add it to the `.env.local` file in your project.
