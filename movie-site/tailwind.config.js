/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  variants: {
    extend: {
      animation: ["group-hover"],
      backgroundColor: ["active"],
      borderColor: ["focus-visible", "first"],
      textColor: ["visited"],
      appearance: ["responsive"],
      textColor: ["active"],
      // ...
      borderColor: ["responsive", "hover", "focus"],
      // ...
      outline: ["responsive", "focus"],
      // ...
      zIndex: ["responsive"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
