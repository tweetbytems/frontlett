/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "edu-blue": "#0249B2",
        "edu-yellow": "#FCD803",
      },
      backgroundImage: {
        // "edu-yellow-gradient":
        //   "linear-gradient(159.13deg, #0249B2 -24.13%, #602093 132.21%)",
      },
    },
  },
  plugins: [],
};
