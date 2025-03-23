import path from 'path';
import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@custom-types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.ts',
  },
});
