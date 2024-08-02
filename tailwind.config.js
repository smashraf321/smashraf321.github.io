/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        robotomono: ["Roboto Mono", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      }
    },
  },
  plugins: [],
}

