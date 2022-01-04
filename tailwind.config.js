const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'morado': '#6a214c',
        'verde': '#7B9C5F'
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
