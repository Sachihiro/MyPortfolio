import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // base: '/assets/',  // Set the base to your deployment subdirectory
})
