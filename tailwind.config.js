import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
    screens: {
      sm: "300px",
      sm: "300px",
      cd: "450px",
      md: "700px",
      lg: "1000px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "rgb(32,45,54)",
            primary: "#2B3743",
          },
        },
        light: {
          colors: {
            background: "#f1f1f1",
            primary: "white",
          },
        },
      },
    }),
  ],
};
