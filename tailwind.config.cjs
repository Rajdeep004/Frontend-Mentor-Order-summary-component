/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        // sm: "500px"
      },
      colors:{
        "paleBlue": "hsl(225, 100%, 94%)",
        "veryPaleBlue": "hsl(225, 100%, 98%)",
        "brightBlue": "hsl(245, 75%, 52%)",
        "desaturatedBlue": "hsl(224, 23%, 55%)",
        "darkBlue": "hsl(223, 47%, 23%)"
      }
    },
  },
  plugins: [],
}
