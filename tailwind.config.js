/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        rose_100: "#ff5f5f",
        color1:"#3bd7ca",
        color2:"#4cbee5",
        color3:"#4f98e6",
        color4:"#cf41ee",
        color5:"#ff8400",
        color6:"#ffc500",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        azonix: ["Azonix", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0px)" },
        },
        fadeout: {
          "0%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(0%)" },
        },
        rotateAnimation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(20deg)",
          },
          "50%": {
            transform: "rotate(45deg)",
          },
          "60%": {
            transform: "rotate(90deg)",
          },
          "65%": {
            transform: "rotate(120deg)",
          },
          "70%": {
            transform: "rotate(160deg)",
          },
          "75%": {
            transform: "rotate(200deg)",
          },
          "80%": {
            transform: "rotate(250deg)",
          },
          "85%": {
            transform: "rotate(280deg)",
          },
          "90%": {
            transform: "rotate(320deg)",
          },
          "95%": {
            transform: "rotate(340deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        barappear: {
          "0%":{width:"15px"},
          "100%":{width:"100%"},
        },
      },
      animation: {
        float2: "float 2s ease-in-out infinite",
        float3: "float 3s ease-in-out infinite",
        float4: "float 4s ease-in-out infinite",
        fadeout: "fadeout 1s ease-in-out 1",
        rotation: "rotateAnimation 4s linear infinite",
        barappear:"barappear 5s ease-in-out 1"
      },
      backgroundImage: {
        radialgradient:
          "radial-gradient(circle 685.3px at 47.8% 55.1%,#ff6398 0,#fbd595 90.1%)",
        radialgradient1:
          "radial-gradient(circle at 0% 0%,transparent max(69% , 2vw),white max(69% , 2vw))",
        radialgradient2:
          "radial-gradient(circle at 0% 100%,transparent 40%,white 40%)",
      },
    },
    plugins: [],
  },
};
