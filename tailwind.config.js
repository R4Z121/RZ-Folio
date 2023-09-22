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
        "112": "28rem",
      }
    },
  },
  plugins: [],
}

