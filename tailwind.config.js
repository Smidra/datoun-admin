const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Helvetica Neue', 'sans-serif'],
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
  daisyui: {
    themes: [ "cmyk", "corporate", "pastel", "cupcake", "fantasy",
      {
        mytheme: {
          "primary": "#16348e",
          "secondary": "#ce4a59",
          "accent": "#94f7e5",
          "neutral": "#1B1B23",
          "base-100": "#EDEBF0",
          "info": "#A8D1F0",
          "success": "#157552",
          "warning": "#F4C271",
          "error": "#F91A3F",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
  ],
}
