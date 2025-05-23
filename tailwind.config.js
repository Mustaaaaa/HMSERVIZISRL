/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-700': '#034792',
        'slate-100': '#F7F7F7',
      },
      screens: {
        'lgcustom': '1111px',
      },
    },
  },
  plugins: [],
}

