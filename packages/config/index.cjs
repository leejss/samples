const tailwindcss = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const postcss = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};

module.exports = {
  tailwindcss,
  postcss,
};
