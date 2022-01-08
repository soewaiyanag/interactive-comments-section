module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        modrateBlue: "hsl(238, 40%, 52%)",
        softRed: "hsl(358, 79%, 66%)",
        paleRed: "hsl(357, 100%, 86%)",
        darkBlue: "hsl(212, 24%, 26%)",
        veryLightGray: "hsl(228, 33%, 97%)",
        lightGrayishBlue: "hsl(239, 57%, 85%)",
        grayishBlue: "hsl(211, 10%, 45%)",
      },
      gridTemplateAreas: {
        layout: [],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
