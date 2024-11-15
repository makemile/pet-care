/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        coral: "#4487FF",
        darkGray: "#4D4F5C",
        lightGray: "#A4AFB7",
        navyBlue: "#015F91",
        skyBlue: "#4487FF57",
        brightBlue: "#4487FF",
        darkPuple: "#2C1DAD29",
        smokeWhite: "#F8F8F8",
        translucentBlack: "#00000029",
        gray_medium: "#707070",
        gray_neutral: "#808080",
        gray_light: "#F3F6FB",
        yellow_vivid: "#FFE530",
        coral_red: "#FF6752",
        yellow_gold: "#FEB53A",
        orange_dark: "#D65C15",
        amber_light: "#FFCC55",
        soft_red_trans: "#FD68454D",
        lavender_blue: "#A89EFF",
        blue_dark_trans: "#3220CE29",
        red_bright: "#FD6845",
        blue_dark: "#3220CE80",
        Coral_flame:"#FE6845"
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        gibson: ["Gibson", "sans-serif"], // Alternativa a Museo Sans Rounded
        comfortaa: ["Comfortaa", "sans-serif"], // Alternativa a Segoe UI
        poppins: ["Poppins", "sans-serif"],
        comforta: ['Comfortaa'],

      },
      fontSize: {
        14: "0.875rem",
        18: "1.125rem",
        20: "1.25rem",
        23: "1.4375rem",
        24: "1.5rem",
        25: "1.5625rem",
        32: "2rem",
        48: "3rem",
        84: "5.25rem",
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      borderRadius: {
        btnradius: "38px",
        cardradius: "20px",
        top_full : "60% 60% 0 0",
      },
      boxShadow: {
        btn_shadow: "0px 3px 6px #2C1DAD29",
        input_shadow: "2px 3px 4px #00000029",
        btn_zipcode: "0px 3px 6px rgba(253, 104, 69, 0.30)",
        card_service: "0px 3px 6px #00000029"
      },
      width: {
        btn_width: "239px",
        input_width: "448px",
      },
      height: {
        btn_height: "75px",
        input_height: "48px",
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};
