/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        blacker: ['var(--font-blacker)', 'serif'],
        inter: ['var(--font-inter)', 'serif'],
        'open-sans': ['var(--font-open-sans)', 'serif'],
      },
    },
  },
  plugins: [],
};
