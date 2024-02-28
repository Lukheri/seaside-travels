/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        "myrtle": "#4A8268",
        "emerald": "#30645C",
        "seafoam": "#84BE9D",
        "shoreline": "#A0825F",
        "warm-sand": "#C6A982",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

