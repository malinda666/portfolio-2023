/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#14213d',
        third: '#fca311',
        light: '#e5e5e5',
        white: '#ffffff',
        accent: '#1bb0ce',
      },
      fontFamily: {
        title: ['Radio Grotesk Regular', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
