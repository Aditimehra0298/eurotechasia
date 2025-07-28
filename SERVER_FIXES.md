# Server Fixes - July 28, 2025

## Issues Fixed

### 1. Port Conflict Resolution
- **Problem**: Vite dev server and Express backend were both trying to use port 3001
- **Solution**: 
  - Vite dev server now runs on port 3000
  - Express backend server runs on port 3001
  - No more port conflicts

### 2. Form Submission API
- **Problem**: Form submissions were getting 404 errors and connection refused
- **Solution**: 
  - Fixed Express server routing
  - Properly configured API endpoints
  - Form now successfully submits to Google Sheets

### 3. Environment Configuration
- **Problem**: Invalid Google Sheets URL in .env file
- **Solution**: Updated .env with correct Google Sheets webhook URL

## Current Setup

- **Frontend**: http://localhost:3000 (Vite dev server)
- **Backend**: http://localhost:3001 (Express API server)
- **Form Submission**: Working correctly → Google Sheets

## How to Start Servers

```bash
# Start both servers
npm run dev:full

# Or start separately
npm run server  # Backend (port 3001)
npm run dev     # Frontend (port 3000)
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/submit-form` - Form submission endpoint

## Testing

Form submission now works correctly:
1. Fill out contact form
2. Data sent to Express server
3. Server forwards to Google Sheets
4. Redirect to thank you page 