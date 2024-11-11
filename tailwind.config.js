/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"], // Kanit font
        raleway: ['"Raleway"', "serif"], // Raleway font
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        // Kanit font weight classes
        ".kanit-thin": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "100",
          fontStyle: "normal",
        },
        ".kanit-extralight": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "200",
          fontStyle: "normal",
        },
        ".kanit-light": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "300",
          fontStyle: "normal",
        },
        ".kanit-regular": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
        },
        ".kanit-medium": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "500",
          fontStyle: "normal",
        },
        ".kanit-semibold": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "600",
          fontStyle: "normal",
        },
        ".kanit-bold": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "700",
          fontStyle: "normal",
        },
        ".kanit-extrabold": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "800",
          fontStyle: "normal",
        },
        ".kanit-black": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "900",
          fontStyle: "normal",
        },
        ".kanit-thin-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "100",
          fontStyle: "italic",
        },
        ".kanit-extralight-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "200",
          fontStyle: "italic",
        },
        ".kanit-light-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "300",
          fontStyle: "italic",
        },
        ".kanit-regular-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "400",
          fontStyle: "italic",
        },
        ".kanit-medium-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "500",
          fontStyle: "italic",
        },
        ".kanit-semibold-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "600",
          fontStyle: "italic",
        },
        ".kanit-bold-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "700",
          fontStyle: "italic",
        },
        ".kanit-extrabold-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "800",
          fontStyle: "italic",
        },
        ".kanit-black-italic": {
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "900",
          fontStyle: "italic",
        },

        // Raleway font weight classes
        ".raleway-thin": {
          fontFamily: '"Raleway", serif',
          fontWeight: "100",
          fontStyle: "normal",
        },
        ".raleway-extralight": {
          fontFamily: '"Raleway", serif',
          fontWeight: "200",
          fontStyle: "normal",
        },
        ".raleway-light": {
          fontFamily: '"Raleway", serif',
          fontWeight: "300",
          fontStyle: "normal",
        },
        ".raleway-regular": {
          fontFamily: '"Raleway", serif',
          fontWeight: "400",
          fontStyle: "normal",
        },
        ".raleway-medium": {
          fontFamily: '"Raleway", serif',
          fontWeight: "500",
          fontStyle: "normal",
        },
        ".raleway-semibold": {
          fontFamily: '"Raleway", serif',
          fontWeight: "600",
          fontStyle: "normal",
        },
        ".raleway-bold": {
          fontFamily: '"Raleway", serif',
          fontWeight: "700",
          fontStyle: "normal",
        },
        ".raleway-extrabold": {
          fontFamily: '"Raleway", serif',
          fontWeight: "800",
          fontStyle: "normal",
        },
        ".raleway-black": {
          fontFamily: '"Raleway", serif',
          fontWeight: "900",
          fontStyle: "normal",
        },
        ".raleway-thin-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "100",
          fontStyle: "italic",
        },
        ".raleway-extralight-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "200",
          fontStyle: "italic",
        },
        ".raleway-light-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "300",
          fontStyle: "italic",
        },
        ".raleway-regular-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "400",
          fontStyle: "italic",
        },
        ".raleway-medium-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "500",
          fontStyle: "italic",
        },
        ".raleway-semibold-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "600",
          fontStyle: "italic",
        },
        ".raleway-bold-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "700",
          fontStyle: "italic",
        },
        ".raleway-extrabold-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "800",
          fontStyle: "italic",
        },
        ".raleway-black-italic": {
          fontFamily: '"Raleway", serif',
          fontWeight: "900",
          fontStyle: "italic",
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FAF0E6",
          secondary: "#818CF8",
          accent: "#F87171",
          neutral: "#3D4451",
          "base-100": "#151515",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
