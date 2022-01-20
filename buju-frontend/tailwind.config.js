module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'material': '0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f',
    },
    extend: {
      spacing: {
        'minus10': '-10px'
      }
    },
  },
  plugins: [],
}
