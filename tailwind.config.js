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
        ctgyColor: "rgba(255, 255, 255, 0.70)",
        ctgyBdrColor: "#2D2D2D",
        userBgColor: "#2B2B2B",
        cartBgColor: "#F0F0F0",
        SnColor: "#6D6D60",
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
        360: "360px",
        p124: "124px",
        644: "644px",
        b62: "62px",
        t57: "57px",
        b69: "69px",
        b42: "42px",
        w437: "437px",
        y16: "16px",
        l77: "77px",
        r83: "83px",
      },
      // Spacing End

      // FontSize Start
      fontSize: {
        39: "39px",
        49: "49px",
        11: "11px",
      },
      // FontSize End
      fontWeight: {
        Bold: "700 !important",
      },
      // Line Height Start
      lineHeight: {
        30: "30px",
        l23: "23px",
      },
      // Line Height End
    },
  },
  plugins: [],
};
