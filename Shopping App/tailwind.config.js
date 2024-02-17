/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide_left: "slideLeft 0.3s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translate(-200px)" },
          "100%": { transform: "translate(0px)" },
        },
      },
    },
  },
  plugins: [],
};
