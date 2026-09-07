import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public',
  plugins: [react()],
  build: {
    outDir: '../dist',
  },
  test: {
    include: ['src/**/*.test.js', 'public/**/*.test.{js,jsx}'],
    environment: 'node',
  },
});
