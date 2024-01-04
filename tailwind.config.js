/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
    colors: {
      black: "#1B1D1F",
      offBlack: "#282B30",
      lightBlue: "#4E80EE",
      gray: "#6C727F",
      offWhite: "#D2D5DA",
    },
    extend: {
      backgroundImage: { heroBanner: "url('/hero-image-wr.jpg')" },
    },
  },
  plugins: [],
};
