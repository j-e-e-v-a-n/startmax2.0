import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false, // Fix issues with serving files
    },
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Add aliases for cleaner imports
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
