/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          100: '#FFE4EF',
          200: '#FFBDD9',
          300: '#FF96C3',
          400: '#FF69B4', // Primary accent color
          500: '#FF3D9E',
          600: '#FF1188',
          700: '#E60077',
          800: '#B30057',
          900: '#800040',
        },
        'secondary': {
          100: '#E6E6FF',
          200: '#B3B3FF',
          300: '#8080FF',
          400: '#4D4DFF',
          500: '#1A1A4D', // Primary background color
          600: '#14143D',
          700: '#0F0F2E',
          800: '#0A0A1F',
          900: '#05050F',
        },
        'platinum': {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E6E6E6',
          400: '#D9D9D9',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 105, 180, 0.5)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'float': '0 20px 40px rgba(0, 0, 0, 0.2)',
        'neon': '0 0 10px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.6), 0 0 30px rgba(255, 105, 180, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'neon-pulse': 'neon-pulse 1.5s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: 0.8,
            filter: 'brightness(1.2)',
          },
        },
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.6)',
          },
          '50%': {
            textShadow: '0 0 15px rgba(255, 105, 180, 0.9), 0 0 25px rgba(255, 105, 180, 0.7)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};