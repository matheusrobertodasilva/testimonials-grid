/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //Primary

        "Moderate-violet": "hsl(263, 55%, 52%)",
        "Very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "Very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        "White": "hsl(0, 0%, 100%)",

        //Neutral

        "Light-gray": "hsl(0, 0%, 81%)",
        "Light-grayish-blue": "hsl(210, 46%, 95%)"
      },
      fontFamily:{
        "barlow":'"Barlow Semi Condensed", sans-serif'
      }
    },
  },
  plugins: [],
}

