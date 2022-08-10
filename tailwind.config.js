module.exports = {
  content: [
     
  ],
  safelist: [
      {
          pattern: /.-brandcolor-./,
      }
  ],
  theme: {
      extend: {
          colors: {
              brandcolor: {
                  50: "#f3d2e4",
                  100: "#ff53aa",
                  200: "#ff49a0",
                  300: "#ff3f96",
                  400: "#f8358c",
                  500: "#ee2b82",
                  600: "#e42178",
                  700: "#da176e",
                  800: "#d00d64",
                  900: "#c6035a",
              },
          }
      },
  },
}