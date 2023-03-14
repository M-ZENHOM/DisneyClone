/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1345px" },
        lg: { max: "1023px" },
        md: { max: "991px" },
        sm: { max: "639px" },
      },
      dropShadow: {
        "4xl": [
          "0px 26px 30px -10px rgb(0 0 0 / 69%)",
          "0px 16px 10px -10px rgb(0 0 0 / 73%)",
        ],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};
