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
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        gibson: ["Gibson", "sans-serif"],
      },
      fontSize: {
        25: "1.5625rem",
        14: "0.875rem",
        20: "1.25rem",
        18: "1.125rem",
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      borderRadius: {
        btnradius: {
          btn_radius: "38px",
        },
      },
      boxShadow: {
        btn_shadow: "0px 3px 6px #2C1DAD29",
        input_shadow: "2px 3px 4px #00000029",
      },
      width: {
        btn_width: "239px",
        input_width: "448px",
      },
      height: {
        btn_height: "75px",
        input_height: "48px",
      },
    },
  },
  plugins: [],
};
