/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-red": "#950101",
        "app-dark-red": "#3D0000",
        "app-soft-black" : "#191919"
      },
      width: {
        "112": "28rem"
      },
      height: {
        "112": "28rem",
        "128": "32rem",
        "132": "33rem"
      },
      maxWidth: {
        "56": "14rem",
        "96": "24rem",
        "112": "28rem",
      },
      transitionProperty: {
        "bg": "background-color"
      }
    },
  },
  plugins: [],
}

