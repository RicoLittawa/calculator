/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'equals': '#004466',
        'numbers': '#4d4d4d',
        'operators':'#8c8c8c',
        'clear':'#ac3939'
      },
      screens: {
        'mobile-one': '360px',
        'mobile-two': '375px',
        'mobile-three': '390px',
        'mobile-four': '412px',
        'mobile-five': '428px',
      },
    },
  },
  plugins: [],
};
