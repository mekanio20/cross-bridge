/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-white": "#F7F9FA",
        "hero-white": "#EBEFF6",
        "hero-blue": "#005193",
        "hero-green": "#008557",
        "over-blue": "#002C2C",
        "over-gray": "#686868",
        "cb-blue": "#004080",
        "cb-green": "#008060",
        "cb-sand": "#D9B382",
        "cb-light-blue": "#E6F0F5",
        "cb-dark-blue": "#002040",
        "cb-dark-green": "#006040",
        navy: "#1e293b",
        "navy-dark": "#131b29",
        "slate-blue": "#475569",
        "light-blue": "#0284c7",
        "deep-blue": "#0c4a6e",
        "blue-gradient-start": "#0ea5e9",
        "blue-gradient-end": "#0c4a6e",
        "green-accent": "#059669",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "95%",
        md: "1200px",
        lg: "1500px",
      },
    },
  },
  plugins: [],
};
