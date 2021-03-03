module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      "0": "0",
      "1/10": "10%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "4/5":"80%",
      "full": "100%",
    },
    minHeight: {
      "0": "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      "4/5":"80vh",
      "9/10":"90vh",
      "full": "100vh",
    },
    extend: {
      minWidth: {
        "1/10": "10%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80",
        full: "100%",
      },
      screens: {
        xsm: "410px",
      },
      colors: {
        eagleGreen: "#045C62",
        tuscany: "#B57D88",
        sky: "#0AD3FF",
        aquamarine: "#85FFDA",
        lgCyan: "#EEFCFC",
        midGreen: "#5B8A53",
        slateGray:"#C5C2C9"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
