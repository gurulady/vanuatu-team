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
          hibiscus: '#c21e56',
          dark: '#9d174d',
        },
        gold: {
          DEFAULT: '#d4a843',
          light: '#e8c76b',
        },
        cream: {
          DEFAULT: '#faf8f3',
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
