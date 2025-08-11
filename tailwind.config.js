/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        myBlue: '#305eff',
        myWhite: '#ffffff',
        listItem: '#f4f7f8',
      },
      width: {
        '81': '20.25rem',
        '85': '21.25rem'
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust if needed
        },
      },
      fontFamily: {
        tasaOrbiter: ["TasaOrbiter", 'sans-serif']
      }
    },

  },
  plugins: [],
}

