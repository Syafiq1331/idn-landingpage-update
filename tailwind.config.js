/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-intro': "url('../src/assets/about/intro.png')",
        'bg-testing': "url('../assets/about/intro.png')",
      },
    },
  },
  plugins: [],
}
