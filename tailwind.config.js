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
        ocean: {
          navy: '#102D43',
        },
        tropical: {
          teal: '#087E8B',
        },
        ruby: {
          red: '#900D29',
        },
        champagne: {
          DEFAULT: '#F7E7CE',
        },
        gold: {
          DEFAULT: '#C6A15B',
        },
        ivory: {
          DEFAULT: '#FFFDF8',
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
