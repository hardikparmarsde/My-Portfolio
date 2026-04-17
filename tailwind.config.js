/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eef0f8',
          200: '#d7dcf2',
          300: '#b5bee6',
          400: '#8d9ad7',
          500: '#6a77c8',
          600: '#505ab2',
          700: '#3f468c',
          800: '#2c315d',
          900: '#1b1d34',
        },
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0, 0, 0, 0.18)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

