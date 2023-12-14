/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Color Start
      colors: {
        primaryColor: "#262626",
        secondaryColor: "#767676",
        categoryBgColor: "#F5F5F3",
        borderColor: "#979797",
        placeholderColor: "#C4C4C4",
        higherSecondaryColor: "#6D6D6D",
        convBorderColor: "#F0F0F0",
        fbColor: "#1877F2",
        inColor: "#0077b5",
        instColor: "#fccc63",
      },
      // Color End

      // Max Width Start
      maxWidth: {
        container: "1600px",
      },
      // Max Width End

      // Font Family Start
      fontFamily: {
        DM: ["DM Sans"],
      },
      // Font Family End

      // Spacing Start
      spacing: {
        140: "140px",
        780: "780px",
        370: "370px",
        118: "118px",
        y6: "6px",
        540: "540px",
        120: "120px",
        140: "140px",
        170: "170px",
        921: "921px",
      },
      // Spacing End

      // FontSize Start
      fontSize: {
        39: '39px',
      }
      // FontSize End
    },
  },
  plugins: [],
};
