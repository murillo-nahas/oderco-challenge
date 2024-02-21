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
        borderGray: "#434343",
        textGray: "#8D8D8D",
        backgroundGray: "#202020",
      },
      fontSize: {
        xlg: "32px",
      },
    },
  },
  plugins: [],
};
