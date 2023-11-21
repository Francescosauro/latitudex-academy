/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Helvetica', 'sans-serif']
    },
    colors: {
      'primary': '#57989B',
      'primary-light': '#79BFBF',
      'primary-lighter': '#E3F0F0',
      'primary-light-opacity': 'rgba(121,191,191,.5)',
      'primary-dark': '#386B6B',
      'primary-darker': '#294C4B',
      'secondary': '#F3954A',
      'secondary-dark': '#D27830',
      'accent': '#3DEBEA',
      'accent-dark': '#3dd9d9',
      'grey': '#7d7d7d',
      'grey-light': '#D6D6D6',
      'grey-lighter': '#F0F0F0',
      'grey-dark': '#474747',
      'false-white': '#FAFAFA',
      'false-white-opacity': 'rgba(250, 250, 250, 0.6)',
      'black': '#0B0B0B',
      'white': '#FFF',
    },
    extend: {
      dropShadow: {
        'text': '0 1px 3px rgba(0, 0, 0, 0.75)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

