/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueSea': '#22577A',
        "verde-hunt": "#80ED99",
      },
      gridTemplateColumns:{
        "footer":"repeat(auto-fit, minmax(15rem,1fr))",
      },
      screens:{
        "xsm":"360px"
      }
    },
  },
  plugins: [],
}
