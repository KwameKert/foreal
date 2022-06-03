const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      primary: {
        // DEFAULT: "#060352",
        DEFAULT: "#005599",
      },
      secondary: {
        // DEFAULT: "#453764",
        DEFAULT: "#0e5477",
      },
      darkGreen: {
        DEFAULT: "#4F5203",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
