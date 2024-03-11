/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        byu: {
          "primary": "#002d5f",
          "secondary": "#0056b8",
          "accent": "#011932",
          "neutral": "#ededed",
          "neutral-content": "#b0b0b0",
          "base-100": "#fbfffc",
          "info": "#cde6ff",
          "success": "#b9dba0",
          "warning": "#ffe597",
          "error": "#f4b98b",
        },
      },
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "retro",
      "valentine",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "dracula",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "winter",
      "nord",
    ],
  },
}

