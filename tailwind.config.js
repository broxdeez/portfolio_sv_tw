/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary' : ['Aldrich', 'sans-serif']
      },   
      }
    },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "cupcake",
      "bumblebee",
      "cyberpunk",
      "retro",
      ],
  },
};