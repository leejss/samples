const { tailwindcss } = require("config");

module.exports = Object.assign(tailwindcss, {
  theme: {
    extend: {
      colors: {
        opaque: "hsla(0,0%,0%,0.33)",
      },
    },
  },
});
