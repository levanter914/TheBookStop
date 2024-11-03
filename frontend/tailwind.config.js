/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#80aca5",       // Soft Green
        secondary: "#4c382c",     // Dark Brown
        blackBG: "#f1e6dc",       // Light Cream
        favorite: "#f9f4ed",      // Another light color you had (not listed in new ones)
        grayBrown: "#978b85",     // Grayish Brown
        lightPeach: "#ca8f82",    // Light Peach
        lightBlue: "#a9bdd2",     // Light Blue
        softGray: "#c5b8b2",      // Soft Gray
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
