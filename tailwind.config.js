/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          deep: '#0f1a2e',
          light: '#2a3f5f',
        },
        purple: {
          sunset: '#6b4c7f',
          light: '#9b7cb6',
        },
        turquoise: {
          tropical: '#2dd4bf',
          deep: '#0d9488',
        },
        red: {
          hibiscus: '#D21034',
          dark: '#B30D2A',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#d4b76e',
          bright: '#F1C40F',
        },
        cream: {
          DEFAULT: '#faf8f3',
        },
        vanuatu: {
          green: '#009543',
          bright: '#19B85A',
        },
        black: {
          volcanic: '#111814',
        },
        jungle: {
          green: '#123D28',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
