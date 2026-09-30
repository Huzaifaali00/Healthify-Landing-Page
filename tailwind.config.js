/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        display: ["DMSerifDisplay_400Regular", "Georgia", "serif"],
        inter: ["Inter_400Regular", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
