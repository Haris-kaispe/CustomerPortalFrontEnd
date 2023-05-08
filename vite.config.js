import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
=======
  build: {
    chunkSizeWarningLimit: 1600,
  }
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});
