import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/MyPortfolio/',  // This should match your GitHub Pages path
});
