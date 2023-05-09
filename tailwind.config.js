module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
      fonts: {
        bebasneue: "Bebas Neue",
      },
    },
  },
  plugins: [],
};
