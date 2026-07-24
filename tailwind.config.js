/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EAF2FE',
          100: '#DCEBFD',
          600: '#1a73e8',
          700: '#1557b0',
        },
        ink: {
          900: '#111827',
          600: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['circular', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
