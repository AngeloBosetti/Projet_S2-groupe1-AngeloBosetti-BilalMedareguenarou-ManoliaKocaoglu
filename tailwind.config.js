/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        lavenderBlue: '#C6C4E4',
        White: '#FAFAFA',
        Black: '#1C1514',
        spaceCadet: '#312B64',
        purpleNavy: '#575486',
        purpleYam: '#736CBB',
        blueBell: '#9F9AD2',
        lightGrey: '#9ca3af',
      }
    }
  },
  plugins: []
}
