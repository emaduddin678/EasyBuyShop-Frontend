import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173, // You can change this to any port you prefer
    host: true, // This allows access from other devices on the network
  },
  plugins: [react(), tailwindcss()],
});
