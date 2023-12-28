/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'SF': ['SF Pro Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}