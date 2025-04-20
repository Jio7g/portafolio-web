// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary': {
            DEFAULT: '#ff3b3b',
            50: '#fff1f1',
            100: '#ffe1e1',
            200: '#ffc7c7',
            300: '#ffa0a0',
            400: '#ff6b6b',
            500: '#ff3b3b',
            600: '#ff2020',
            700: '#ef0d0d',
            800: '#cf0f0f',
            900: '#a91515',
            950: '#5c0404',
          },
          'secondary': {
            DEFAULT: '#00ffaa',
            50: '#f0fff7',
            100: '#c7ffe6',
            200: '#9fffd6',
            300: '#64ffbe',
            400: '#2cffa4',
            500: '#00ff88',
            600: '#00db73',
            700: '#00b55d',
            800: '#00904d',
            900: '#007742',
            950: '#00432a',
          },
          'dark': {
            DEFAULT: '#0d0d0d',
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
            950: '#0d0d0d',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Space Grotesk', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(255, 59, 59, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(255, 59, 59, 0.8)' },
          },
        },
      },
    },
    plugins: [],
  }