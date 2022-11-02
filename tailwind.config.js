/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont-bold':['mont-bold'],
        'mont-semiBold':['mont-semibold'],
        'mont-regular': ['mont-regular'],
        'mont-heavy': ['mont-heavy'],
      }
    },
  },
  plugins: [],
}
