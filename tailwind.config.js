module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'secondary': {
        1: '#0466c8',
        2: '#0353a4',
        3: '#023e7d'
      },
      'primary': {
        1: '#00111c',
        2: '#001523',
        3: '#001a2c'
      },
      'text': {
        1: '#ffffff',
        2: '#dee2e6',
      }
    },
    extend: {
      animation: {
        '': 'spin 3s linear infinite',
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
