import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites need /repository-name/.
// Set VITE_BASE_PATH in the GitHub Actions workflow or .env when needed.
// For a user site (username.github.io), keep the base as "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
});
