/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#fdf8f3",
          100: "#f7e8d9",
          200: "#efd0b3",
          300: "#e5b088",
          400: "#d98e5e",
          500: "#c87642",
          600: "#b46437",
          700: "#964f2f",
          800: "#7a412b",
          900: "#643726",
        },
      },
    },
  },
  plugins: [],
};
