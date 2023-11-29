/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is to tell tailwind where to look for classes that we are applying in this project
  content: [
    "/index.html", // Tailwind will look for our classes in index.html file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Looking for files with the specified extensions (vue, js, ts, jsx, tsx) in any subdirectory under the "/src/" directory.
  ],
    theme: {
    extend: {
      colors:{
        "weather-primary":"#00668A",
        "weather-secondary":"#004E71"
      },
    },
    fontFamily:{
      Roboto:["Roboto, sans-senrif"]
    },
    container:{
      padding: '2rem',
      center: true
    },
    screens:{
      sm: '640px',
      md: '768px'
    }
  },
  plugins: [],
}

