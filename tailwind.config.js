/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#000000",
        secondaryColor:"#ef233c",
        primryText:"#fefae0"

      }
    },
    container:{
      center:true
    },
    fontFamily:{
      mont: ["Montserrat", "sans-serif"]
    },
  },
  plugins: [],
}