/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        borderYellow: "#DBA90D",
        borderYellowHover: "#E2C055",
        borderGray: "#434343",
        textGray: "#8D8D8D",
        textGrayLighter: "#A7A7A7",
        backgroundGray: "#202020",
      },
      fontSize: {
        xlg: "32px",
      },
    },
  },
  plugins: [],
};
