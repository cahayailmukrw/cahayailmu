/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        gold: {
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        }
      },
    },
  },
  plugins: [],
}
