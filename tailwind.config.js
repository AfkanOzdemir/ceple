/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'app': "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')"
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
    colors: {
      "brand-color": "#6063F4",
      "primary-brand-color": "#4E52D2",
      "secondary-brand-color": "#7849f7",
      "brand-yellow": "#ffd300",
      "white": "#ffff",
      "gray": "#dfdee2",
      "hero": "#838287",
      "darkGray": "#3e3e3e",
      "cardText": "#697488",
    },
  },
  plugins: [],
}

