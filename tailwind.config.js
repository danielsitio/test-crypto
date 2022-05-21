module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      foreground: 'rgba(0,0,0,.5)',
      'primary': {
        1: '#00111c',
        2: '#001523',
        3: '#001a2c'
      },
      'secondary': {
        1: '#0466c8',
        2: '#0353a4',
        3: '#023e7d'
      },
      'text': {
        1: '#ffffff',
        2: '#707A8A',
      }
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
      },
      keyframes: {
        'from-green': {
          '0%': {
            color: 'green'
          },
          '100%': {
            color: 'white'
          },
        },
        'from-red': {
          '0%': {
            color: 'red'
          },
          '100%': {
            color: 'white'
          },
        }
      },
      animation: {
        'gain': 'from-green .5s ease-out',
        'drop': 'from-red .5s ease-out'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
