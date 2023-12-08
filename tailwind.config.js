/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        AuthBG: "url('../src/Assets/AuthBG.jpg')",
      },
      screens: {
        xxs: '0px',
        at464: '464px',
        at900: '900px',
        at921: '921px',
        at1054: '1054px',
      }
    },
  },
  plugins: [],
};
