const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },
      container: {
        center: true,
        padding: {
          'sm': '32px',
          'xl': '64px',
          '2xl': '64px',
        }
      },
      screens: {
        'md': '420px',
        'lg': '420px',
        'xl': '420px',
        '2xl': '420px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
