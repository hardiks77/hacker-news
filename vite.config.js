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
      external: [
        'react-router-dom',
        '@tanstack/react-query',
        'zustand',
        'axios',
      ],
    },
  },
});