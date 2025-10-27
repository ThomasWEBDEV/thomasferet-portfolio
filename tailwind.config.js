/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "72rem" } },
    extend: {
      colors: { brand: { 50:"#eef2ff",100:"#e0e7ff",400:"#818cf8",500:"#6366f1",600:"#4f46e5" } },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 2px 12px rgba(0,0,0,.15)" },
    },
  },
  plugins: [],
};
