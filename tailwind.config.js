/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#bde0fe",

        "secondary": "#ffafcc",

        "accent": "#023047",

        "neutral": "#3D4451",

        "base-100": "#FFFFFF",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    }, ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#ade8f4",
        secondary: "#e63946",
        neut: "#DBE0E1",
        darkNeut: "#03071e",
      },
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('tailwindcss-filters'),
    require("daisyui"),
  ],
}