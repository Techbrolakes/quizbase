module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151630",
      },
      backgroundImage: {
        background: "url('/Background.png')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
