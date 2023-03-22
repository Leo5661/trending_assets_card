/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Tomorrow": ["Tomorrow"]
    },
    colors: {
      "trasparent": "trasparent",
      "blue": "#14172b",
      "font_blue": "#737BAE",
      "font_white": "#ECF0FF",
      "font_blue_light": "#5A5F7D",
      "red": "#FF4D4D",
      "green": "#00FFA3",
      // gradient color
      "card_bg_start": "#2E31491A",
      "card_bg_end": "#626A881A",
      "border_start": "#2E3149",
      "border_end": "#ECF0FF",
    },
    extend: {},
  },
  plugins: [],
}
