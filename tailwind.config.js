/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: {
        'banner-background': "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/images/bannerFace2.png')",
      },
    }
    },
    plugins: [],
  }