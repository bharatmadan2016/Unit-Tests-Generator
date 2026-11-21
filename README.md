# 🧪 AI Unit Test Generator

# Unit-Tests-Generator

An AI-powered web app that generates comprehensive unit tests for your code using the **Google Gemini API**. Built with **React** (Vite) on the frontend and **Node.js + Express** on the backend.

---

## ✨ Features

- 📋 Paste any source code and get unit tests instantly
- 🔤 Supports **Python** (pytest), **JavaScript** (Jest), **Java** (JUnit 5), **C++** (Google Test)
- 🧪 Generates **normal cases**, **edge cases**, and **invalid input** tests
- 📋 One-click **copy** button for the generated tests
- 🔒 API key stored securely on the backend — never exposed to the browser
- ⚡ Powered by **Gemini 2.0 Flash**

---

## 📁 Project Structure

```
ai-unit-test-generator/
├── backend/
│   ├── server.js          # Application bootstrap
│   └── src/
│       ├── config/        # Environment and runtime configuration
│       ├── controllers/   # HTTP request orchestration
│       ├── middleware/    # Centralized error handling
│       ├── routes/        # API route definitions
│       ├── services/      # Gemini integration and business logic
│       └── utils/         # Shared backend utilities
│   ├── .env               # Your API key goes here (not committed)
│   ├── .env.example       # Template for .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── config/        # Frontend constants and environment config
│   │   ├── hooks/         # UI/application state hooks
│   │   ├── services/      # Backend API client
│   │   ├── utils/         # Presentation-independent helpers
│   │   ├── App.jsx        # Page composition
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Setup & Run

### Prerequisites

- **Node.js** v18+ ([download](https://nodejs.org))
- A **Google Gemini API key** ([get one free](https://aistudio.google.com/app/apikey))

---

### 1. Clone / Download the project

```bash
git clone <your-repo-url>
cd ai-unit-test-generator
```

### 2. Configure the backend

```bash
cd backend
cp .env.example .env
```

Open `backend/.env` and replace `your_gemini_api_key_here` with your actual key:

```
GEMINI_API_KEY=AIzaSy...your_real_key_here
PORT=3001
CLIENT_ORIGIN=http://localhost:5173
# Optional: GEMINI_MODEL=gemini-2.5-flash
```

### 3. Install & start the backend

```bash
cd backend
npm install
npm run dev
```

You should see:
```
🚀 AI Unit Test Generator backend running on http://localhost:3001
   API key configured: ✅
```

### 4. Install & start the frontend (new terminal)

```bash
cd frontend
npm install
npm run dev
```

Open your browser at **http://localhost:5173** 🎉

---

## 🔑 Getting a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key and paste it into `backend/.env`

The free tier is generous enough for development use.

---

## 🛠 API Reference

### `POST /api/generate-tests`

**Request body:**
```json
{
  "code": "def add(a, b):\n    return a + b",
  "language": "python"
}
```

**Supported languages:** `python`, `javascript`, `java`, `cpp`

**Success response:**
```json
{
  "tests": "import pytest\n...",
  "language": "python"
}
```

**Error response:**
```json
{
  "error": "Error message here"
}
```

### `GET /api/health`

Returns server status and whether the API key is configured.

---

## ⚠️ Troubleshooting

| Problem | Solution |
|---|---|
| `Cannot connect to backend` | Make sure the backend is running on port 3001 |
| `Invalid Gemini API key` | Check your `backend/.env` has a valid key |
| `Rate limit reached` | Wait a few seconds and try again |
| Frontend shows blank page | Run `npm install` in the `frontend/` folder |

---

## 📝 Notes

- The backend validates all inputs before calling the Gemini API
- Code is limited to 15,000 characters per request
- The `.env` file is listed in `.gitignore` and will never be committed
