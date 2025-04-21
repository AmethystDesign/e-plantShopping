import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/shoppingreact",
  // base: "/e-plantShopping",  2025-04-20 commented for testing deploy on Vercel. uncomment it if deploy on gh-pages
  plugins: [react()],
})
