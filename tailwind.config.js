/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'w-1/2',
    'w-1/3',
    'w-1/4',
    'w-1/5',
    'w-1/6',
  ],
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
          "secondary": "#004592",
          // "accent": "#011932",
          "accent": "#f0a332",
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

