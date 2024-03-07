/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      vary: ['Vary', 'sans-serif']
    },
    extend: {
      transitionDuration: '300ms',
      colors: {
        dark: '#151313',
        primary: '#F3511F'
      }
    }
  },
  plugins: []
}
