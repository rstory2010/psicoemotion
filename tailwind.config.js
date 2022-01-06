const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage:(theme) => ({
        'papel': "url('./assets/img02.png')",
      }),
      colors: {
        'morado': '#6a214c',
        'verde': '#7B9C5F',
        'whatsapp': '#075E54',
        'whatsappBase': '#ECE5DD',
        'telegram': '#0088cc',
        'zoom': '#2D8CFF'

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
