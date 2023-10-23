/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
  "mytheme": {
    "primary": "#4A4E69",
    "secondary": "#9A8C98",
    "accent": "#C9ADA7",
    "neutral": "#18182A",
    "base-100": "#FAF0EB",
    "info": "#C9ADA7",
    "success": "#419D78",
    "warning": "#ad942f",
    "error": "#bd2a49"
  }
}],
  },
};