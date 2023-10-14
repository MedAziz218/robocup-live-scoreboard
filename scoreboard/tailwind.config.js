/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'AREblack': '#000000',
        'AREgray': '#1d1c18',
        'AREyellow': '#e2ac0d',
        'AREbeige': '#e1dbbd',
        'AREwhite': '#ffffff',
        // Add as many custom colors as you want
      },
    },
  },
  plugins: [],
}