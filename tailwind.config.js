/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FAF0E6", // Customize primary color
          secondary: "#818CF8", // Customize secondary color
          accent: "#F87171", // Customize accent color
          neutral: "#3D4451", // Customize neutral color
          "base-100": "#151515", // Background color
          info: "#3ABFF8", // Info color
          success: "#36D399", // Success color
          warning: "#FBBD23", // Warning color
          error: "#F87272", // Error color
        },
      },
    ],
  },
};
