/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '3px 3px 0px 0px rgb(0 0 0 / 1)'
      }
    },
  },
  plugins: [],
}

