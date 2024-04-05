/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px' // Extra large screens
    },

    extend: {
      colors: {
        purple: '#9E3FFD',
        darkPurple: '#16163F'
      },

    },
  },
  plugins: [],
}

