// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12305B',
      },
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '600px',
      },
    },
  },
  plugins: [],
}
