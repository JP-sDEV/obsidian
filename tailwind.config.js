module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Courier New']
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
