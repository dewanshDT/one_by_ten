# 🚀 Quick Setup Guide

## Google Sheets Integration (5 minutes)

### 1. Create Google Sheet

- Go to https://sheets.google.com
- Create new spreadsheet: "1/10 Email Signups"
- Add headers: `Timestamp | Email | Source`

### 2. Add Apps Script

- **Extensions** > **Apps Script**
- Paste code from `GOOGLE_SHEETS_SETUP.md`
- **Save** > **Deploy** > **New deployment**
- Type: **Web app**
- Execute as: **Me**
- Access: **Anyone**
- Copy the Web App URL

### 3. Configure Environment

- Open `.env.local`
- Replace `YOUR_SCRIPT_ID` with your actual script URL
- Example: `NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycby.../exec`

### 4. Restart Dev Server

```bash
npm run dev
```

### 5. Test It!

- Go to http://localhost:3000
- Enter an email and click "Get Coffee"
- Check your Google Sheet - the email should appear!

## ✅ Done!

Every form submission now automatically adds the email to your Google Sheet with a timestamp.

## 🔒 Security Note

The `.env.local` file is automatically ignored by git and won't be pushed to your repository.
