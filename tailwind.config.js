/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // './nuxt.config.{js,ts}',
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "black-primary": "#060E3D",
        "black-secondary": "#5B6181",
        "red-primary": "#FF3600",
        "yellow-primary": "#FFBA28",
        "grey-primary": "#979494",
        "grey-secondary": "#E5E8EF",
        "blue-primary": "#124AD6",
        "blue-secondary": "#2073CE",
        "white-primary": "#F8FCFF",
      },
      borderRadius: {
        "full-image": "75px",
      },
      fontSize: {
        "4.5xl": "2.625rem",
      },
    },
  },
  plugins: [],
};
