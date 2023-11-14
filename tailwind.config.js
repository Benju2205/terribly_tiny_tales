/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "300px" },
      },
      letterSpacing: {
        "widest-plus": "0.3em",
      },
    },
  },
  plugins: [],
};
