/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {


    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',

      },
      keyframes: {
        waving: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '25%, 50%, 75%, 99%': { transform: 'rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '25%, 50%, 75%': { transform: 'rotate(10deg)' },
        }
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      fontSize: {

        'h3-desktop': [
          '30px', {
            lineHeight: '36px',
            letterSpacing: '-2%',
          }
        ],

        'h2-desktop': [
          '36px', {
            lineHeight: '40px',
            letterSpacing: '-2%',
          }
        ],
        'subtitle-desktop': [
          '20px', {
            lineHeight: '28px',
            letterSpacing: '0%',
          }
        ],
        'h1-desktop': [
          '60px', {
            lineHeight: '72px',
            letterSpacing: '-2%',
            fontWeight: 700,

          }
        ],
        'h1-tablet': [
          '48px', {
            lineHeight: '48px',
            letterSpacing: '-2%',
            fontWeight: 700,

          }
        ],
        'h1-mobile': [
          '36px', {
            lineHeight: '40px',
            fontWeight: 600,
          }
        ],
        'body2': [
          '16px',
          '24px'
        ],
        'body3': ['14px', '20px'],
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

