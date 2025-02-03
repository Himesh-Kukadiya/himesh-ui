// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js', // Main entry for your library
      name: 'himesh-ui',
      fileName: (format) => `himesh-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclude React from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
