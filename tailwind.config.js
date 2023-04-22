/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        animation: {
          hoverPulse: 'hoverPulse 2s'
        },
        keyframes: {
          hoverPulse: {
            '0%': {
              boxShadow: '0 0 0 0 rgba(29, 53, 87, 0.5)',
            },
            '70%': {
              boxShadow: '0 0 0 0.5em rgba(29, 53, 87, 0)',
            },
            '100%': {
              boxShadow: '0 0 0 0 rgba(29, 53, 87, 0)',
            },
          },
        },
        colors: {
          "main-white": '#F1FAEE',
          "main-blue": '#1D3557',
          "hover-blue": '#457B9D'
        },
    }
    },
    plugins: [],
  }