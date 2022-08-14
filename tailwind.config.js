module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["'Inter'", "'Segoe UI'", 'Roboto', "'Helvetica Neue'", 'Arial', "'Noto Sans'", "'Liberation Sans'", 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        midnight: {
          100: '#241F2C',
          150: '#272130',
          200: '#2d2638',
          300: '#433B50',
          400: '#635676',
          500: '#8875A5',
          600: '#B9A0DF',
          700: '#C2AFDF',
          800: '#CCBEE1',
          900: '#E5D3FF',
          1000: '#E6D5FF'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
