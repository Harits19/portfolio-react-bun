/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      colors: {
        'athens-gray': '#F9FAFB',
        'mischka': '#D1D5DB',
        'ebony-clay': '#1F2937'
      },
    },
  },
  plugins: [],
}

