/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.html", "./src/**/*.{html,ts}", "./index.html"],
  theme: {
    extend: {
      fontFamily: { sans: "Livvic" },
    },

    extend: {
      colors: {
        ada_green: "#A6F750",
        ada_navyblue: {
          50: "#181C23",
          100: "#0F1216",
        },
        ada_grey: "#757575",
      },
    },
  },
  plugins: [],
};
