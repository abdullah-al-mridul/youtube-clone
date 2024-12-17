/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        mb: "550px",
        "4k": "2860px",
        "8k": "3230px",
      },
    },
  },
  plugins: [],
};
