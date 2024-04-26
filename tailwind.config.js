/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sofia: ["Sofia", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        parisienne: ["Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
