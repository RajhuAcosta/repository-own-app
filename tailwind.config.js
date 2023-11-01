/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxsm":"375px",
        "xsm":"400px",
        "xsmd":"500px",
        "smd":"600px",
        "smmd":"700px",
        "3xl":"1920px",
      },
    },
  },
  plugins: [],
}

