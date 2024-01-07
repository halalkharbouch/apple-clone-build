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
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(0)' },
        },
        },
        animation: {
          slideIn: 'slideIn 0.5s ease-in-out',
      },
      transformOrigin: {
        '0': '0%',
        '50': '50%',
        '100': '100%',
        'left': 'left',
        'right': 'right',
        'top': 'top',
        'bottom': 'bottom',
      }
    },
  },
  plugins: [],
}