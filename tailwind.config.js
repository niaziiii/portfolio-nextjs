/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212c42",
        "main-2": "#212c4285",
        "main-3": "rgb(17 95 221)",
        secondary: "#151c2b",
        btn: "#525a6a",
      },
      minHeight: {
        "1/3": "90vh",
        "1/4": "100vh",
        "1/6": "80vh",
      },
      lineHeight: {
        "1/2": "1.15",
      },
      minWidth: {
        2: "10rem",
      },
      scale: {
        300: "7.2",
      },
      flex: {
        "flex-40": "0 0 40%",
      },
      screens: {
        medium: "900px",
      },
    },
  },
  plugins: [],
};
