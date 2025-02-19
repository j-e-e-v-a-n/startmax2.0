import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // Change this if your app is deployed under a subpath
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
