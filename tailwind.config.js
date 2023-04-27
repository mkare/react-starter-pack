/** @type {import('tailwindcss').Config} */
import generateTintsAndShades from "./src/utils/color";
const primary = "#182c61";
const secondary = "#6d214f";
const danger = "#b33771";
const warning = "#F97F51";
const info = "#25CCF7";
const success = "#58B19F";
const dark = "#222f3e";
const light = "#f5f6fa";

const primaryVariations = generateTintsAndShades(primary);
const secondaryVariations = generateTintsAndShades(secondary);
const dangerVariations = generateTintsAndShades(danger);
const warningVariations = generateTintsAndShades(warning);
const infoVariations = generateTintsAndShades(info);
const successVariations = generateTintsAndShades(success);
const darkVariations = generateTintsAndShades(dark);
const lightVariations = generateTintsAndShades(light);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: primaryVariations,
        secondary: secondaryVariations,
        danger: dangerVariations,
        warning: warningVariations,
        info: infoVariations,
        success: successVariations,
        dark: darkVariations,
        light: lightVariations,
      },
    },
  },
  plugins: [],
};
