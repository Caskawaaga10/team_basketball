/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe4e37',
        secondary: '#fffaf9',
        bgColor: '#f8f9fd',
        textColor: '#4f5e71',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        bodyText: '16px',
        smallText: '12px',
        subTitle: '18px',
        heading: '26px',
      },
      lineHeight: {
        body: '24px',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'container-padding': '0.937rem',
      },
    },
  },
  plugins: [],
};