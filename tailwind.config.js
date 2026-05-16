/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(104, 86, 63, 0.08)"
      },
      colors: {
        brand: {
          50: "#f4fbff",
          100: "#e4f3ff",
          500: "#77aedd",
          600: "#5b8fbe",
          700: "#4c83b4"
        }
      }
    }
  },
  plugins: []
};
