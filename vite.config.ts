
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Split large libraries into separate cached chunks
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          'vendor-ui': ['lucide-react'],
        },
      },
    },
    // Strip console.log and debugger in production builds
    esbuildOptions: {
      drop: ['console', 'debugger'],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});