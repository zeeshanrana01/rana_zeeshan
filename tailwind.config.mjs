/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        surface: {
          950: "#060911",
          900: "#090d16",
          850: "#0d1322",
          800: "#0f172a",
          700: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};