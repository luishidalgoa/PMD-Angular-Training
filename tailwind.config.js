/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}",
  ],
  //Declaramos que el manejo de darkMode sea por clase
  darkMode: 'class', //or 'media' or 'class'
  theme: {
    extend: {
      //Agregamos paletas de colores personalizados
      colors:{
        'antiquewhite': {
          DEFAULT: '#FAEBD7',
          50: '#FAEBD7',
          100: '#F7DFBE',
          200: '#F1C68C',
          300: '#EAAD5A',
          400: '#E49428',
          500: '#BD7618',
          600: '#8B5711',
          700: '#59380B',
          800: '#271905',
          900: '#000000',
          950: '#000000'
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

