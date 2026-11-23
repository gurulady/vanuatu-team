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
        jungle: {
          green: '#123D28',
        },
        savage: {
          green: '#79FF36',
        },
        tropical: {
          leaf: '#3E8B50',
        },
        lagoon: {
          blue: '#08A6B5',
        },
        hibiscus: {
          red: '#B91F3D',
        },
        island: {
          gold: '#E4B83F',
        },
        volcanic: {
          black: '#111814',
        },
        coconut: {
          ivory: '#FFF9EE',
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
