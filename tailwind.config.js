/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { spacing: { page: "calc(100vh - 5rem)" } },
  },
  plugins: [],
};
