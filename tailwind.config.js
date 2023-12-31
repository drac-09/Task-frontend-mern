/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tasks: "url('./src/assets/tasks.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
