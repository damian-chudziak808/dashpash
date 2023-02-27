/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
