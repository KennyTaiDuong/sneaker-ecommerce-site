/// <reference types="vitest" /> 
/// <reference types="vite/client" /> 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from "vite-plugin-istanbul"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
    include: ["**/*.test.tsx"]
  }
  
})
