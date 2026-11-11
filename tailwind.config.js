/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        surface: "#E2E8F0",
        accent: "#2563EB",
        ink: "#0F172A",
        body: "#475569"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
