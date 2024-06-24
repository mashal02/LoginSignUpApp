/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all Vue, JavaScript, and TypeScript files in the src directory
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
