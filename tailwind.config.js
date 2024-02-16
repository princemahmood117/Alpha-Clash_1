module.exports = {
    //...
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  }

// for tailwind intelisence

  /** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}