/** @type {import('tailwindcss').Config} */

const config = {
  darkMode:['class'],
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',
      screens:{
        '2xl':'1400px',
      },

    },

    extend: {
      colors:{
        dark:{
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4:'#6a85ff',
        },
        blue:{
          1:'#03396c',
          2:'#c0ccdc',
        },
        orange: {
          1: '#FF742E',
        },
        white:{
          1:'#f8f9fa'
        },
      },
      fontFamily: {
        'poetsen-one': ['"Poetsen One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;