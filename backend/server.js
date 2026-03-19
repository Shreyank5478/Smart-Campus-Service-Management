// ============================================
// MAIN SERVER FILE
// Initializes and runs the Express server
// ============================================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import { sanitizeInputs } from './middlewares/validation.js';
import serviceRequestRoutes from './routes/serviceRequestRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ============================================
// MIDDLEWARE
// ============================================

// CORS (allow requests from frontend)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3002',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Sanitize inputs middleware
app.use(sanitizeInputs);

// Request logging middleware (development only)
if (NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.path}`);
    next();
  });
}

// ============================================
// ROUTES
// ============================================

/**
 * Health check endpoint
 * GET /health
 */
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Smart Campus Backend is running',
    timestamp: new Date(),
    environment: NODE_ENV
  });
});

/**
 * API Info endpoint
 * GET /api
 */
app.get('/api', (req, res) => {
  res.json({
    name: 'Smart Campus Service Management API',
    version: '1.0.0',
    endpoints: {
      serviceRequests: '/api/requests',
      users: '/api/users',
      health: '/health'
    },
    documentation: 'See BACKEND_SETUP.md for API documentation'
  });
});

/**
 * Service Request Routes
 * /api/requests/*
 */
app.use('/api/requests', serviceRequestRoutes);

/**
 * User Routes
 * /api/users/*
 */
app.use('/api/users', userRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// 404 Not Found handler (must be after all routes)
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   Smart Campus Service Management    ║
║              Backend API              ║
╚════════════════════════════════════════╝

✓ Server running on http://localhost:${PORT}
✓ Environment: ${NODE_ENV}
✓ CORS Origin: ${process.env.CORS_ORIGIN || 'http://localhost:3002'}

📝 API Test: http://localhost:${PORT}/api
🏥 Health Check: http://localhost:${PORT}/health

📚 Documentation: See BACKEND_SETUP.md for complete API reference
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n\n⚠️  SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n⚠️  Server stopped');
  process.exit(0);
});

export default app;
