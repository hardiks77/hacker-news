import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'antd': path.resolve(__dirname, 'node_modules/antd'),
    },
  },
  build: {
    rollupOptions: {
      // Do not externalize dependencies that are used in the frontend
      external: [],
    },
  },
});
