module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c19d60",
        gray: {
          "system-1": "#292929",
          "system-2": "#ffffff14",
          "system-3": "#212121",
        },
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
