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
        dark: '#2d232e',
        third: '#fca311',
        light: '#f1f0ea',
        accent: '#3a0ca3',
      },
      fontFamily: {
        title: ['Dirtyline', 'sans-serif'],
        title2: ['Wagon Italic', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
