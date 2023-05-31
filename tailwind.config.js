/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ibm":"'IBM Plex Sans', sans-serif",
        "roboto":"'Roboto', sans-serif"
      },
      colors:{
        blue:'#016ED9',
        neon:'#C7F03D',
        green:'#21D282',
        darkGreen:'#074751',
        red:'#D14343',
        gray:'#727896',
      }
    },
  },
  plugins: [],
}

