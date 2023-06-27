/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      textColor: {
        solyntaYellow: "#FFD60C",
        solyntaBlue: "#3F6FBB",
        solyntaBlack: "#3F3F3F",
      },
      backgroundColor: {
        solyntaYellow: "#FFD60C",
        solyntaYellowFaded: "#FFF0A5",
        solyntaBlue: "#3F6FBB",
        solyntaBlueFaded: "#CCDDF8",
        solyntaBlack: "#3F3F3F",
      },
    },
  },
  plugins: [],
};
