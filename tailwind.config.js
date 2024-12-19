/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage : {
        'hero-bg' : "url('./src/assets/images/heroImage.png')"
      }
    },
  },
  plugins: [],
}

