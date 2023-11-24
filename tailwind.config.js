/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section-bg": "url('../app/assets/hero-section-bg.jpeg')"
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
