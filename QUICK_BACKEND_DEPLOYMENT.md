# 🚀 Quick Backend Deployment Solution

## The Problem
Your Google Apps Script is expecting JSON data, but form submissions send form-encoded data, causing parsing errors.

## Solution: Deploy Backend to Render (Free)

### Step 1: Deploy Backend (5 minutes)
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository: `https://github.com/Aditimehra0298/eurotechasia.git`
5. Configure:
   - **Name**: `ce-mark-backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `PORT`: `10000`
     - `GOOGLE_SHEETS_URL`: `https://script.google.com/macros/s/AKfycbwTdbvnXFz-aYYkIQt6iuUwxQ3FVOLc0xWuJl38loFk44reDfGlKNjyZM7xHFpZ4KBA/exec`
6. Click "Create Web Service"
7. Wait for deployment (2-3 minutes)
8. Copy the URL (e.g., `https://ce-mark-backend-xyz.onrender.com`)

### Step 2: Update Frontend
1. Update `src/services/formService.ts`:
   ```typescript
   const API_BASE_URL = import.meta.env.VITE_API_URL || 
     (window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://your-actual-backend-url.onrender.com');
   ```
2. Replace `your-actual-backend-url` with your Render URL
3. Run `npm run build`

### Step 3: Deploy Frontend
1. Upload the new `dist` folder to Netlify
2. Your forms will work perfectly!

## Why This Works
- Backend handles CORS properly
- Backend converts form data to JSON for Google Apps Script
- No more parsing errors
- Professional solution

## Alternative: Railway
If Render doesn't work, try [railway.app](https://railway.app) with the same configuration.

## Current Status
- ✅ Frontend deployed to Netlify
- ❌ Backend needs deployment
- ❌ Forms not working due to CORS/data format issues

## Expected Result
After backend deployment, forms will:
- Submit without errors
- Save data to Google Sheets
- Work for all users worldwide 