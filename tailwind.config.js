/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {


    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      colors: {

        'light-gray': {
          'default': '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'dark-gray': {
          950: '#ffffff',
          900: '#f9fafb',
          800: '#f3f4f6',
          700: '#e5e7eb',
          600: '#d1d5db',
          500: '#9ca3af',
          400: '#6b7280',
          300: '#4b5563',
          200: '#374151',
          100: '#1f2937',
          50: '#111827',
          'default': '#030712',
        }
      },
    },
  },
  plugins: [],
}

