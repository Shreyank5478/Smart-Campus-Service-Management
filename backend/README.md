# Smart Campus Backend - Quick Start

A clean, beginner-friendly Node.js backend with MVC architecture.

## ⚡ Quick Start (2 minutes)

### 1. Install & Setup
```bash
cd backend
npm install
cp .env.example .env
# Add Firebase credentials to .env
```

### 2. Add Firebase Service Key
- Get key from Firebase Console → Project Settings → Service Accounts
- Save as `backend/serviceAccountKey.json`

### 3. Run Server
```bash
npm run dev    # Development (auto-reload)
npm start      # Production
```

Visit: http://localhost:5000/health

## 📁 Folder Structure

```
config/        → Database & constants
models/        → Database operations
controllers/   → Business logic
routes/        → API endpoints
middlewares/   → Validation & errors
server.js      → Main server file
.env           → Your secrets (DO NOT COMMIT)
```

## 📚 Complete Documentation

See [BACKEND_SETUP.md](../BACKEND_SETUP.md) for:
- Detailed API endpoints
- Code examples
- Error handling
- Troubleshooting

## 🚀 First API Call

```bash
curl http://localhost:5000/api
```

## 🔗 Frontend Connection

Update your frontend `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

---

**Status**: ✅ Production-ready MVC structure
**Breaking Changes**: ❌ None (uses same Firebase setup)
**Beginner-Friendly**: ✅ Yes - clean separation of concerns
