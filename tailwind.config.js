/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          bannerImg: "url('./assets/bg1.jpg')", // Path relative to `src`
        },
      },
    },
    plugins: [],
  };
