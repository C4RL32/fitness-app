import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Asegura que busca en el directorio actual
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});