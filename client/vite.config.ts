import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  plugins: [eslint(), react()],
  server: {
    port: 3000,
  },
});
