/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        MonaSans: ["Mona-Sans", "sans-serif"],
      },
      colors: {
        primaryGreen: "#009F79",
        textMatBlack: "#424242",

        primaryShadeBlue: "#FB2AFF",
        primaryShadeGreen: "#FFAE64",

        primaryBgColor: "var(--background-color)",
        blackAndWhite: "var(--black-and-white)",
        whiteAndBlack: "var(--white-and-black)",
        workflowCardBg: "var(--workflow-card-bg)",
        dshboardCardBg: "var(--dashboard-card-bg)",

        primary: "var(--primary)",
        secondaryOne: "var(--secondary-one)",
        secondaryTwo: "var(--secondary-two)",
        secondaryThree: "var(--secondary-three)",
        secondaryFour: "var(--secondary-four)",
        secondaryFive: "var(--secondary-five)",
        secondarySix: "var(--secondary-six)",
        secondarySeven: "var(--secondary-seven)",

        // non chage colors
        colorGradient: "var(--color-gradient)",
        colorGreen: "var(--color-green)",
        colorBlack: "var(--color-black)",
        colorWhite: "var(--color-white)",
        colorLightGray: "var(--color-light-gray)",
        colorTextGray: "var(--color-text-gray)",
        colorTextDarkGray: "var(--color-text-dark-gray)",
        colorTextGreen: "var(--color-text-green)",
        colorErrorRed: "var(--color-error-red)",
        // non chage colors
        thirdColorOne: "var(--third-color-one)",
        thirdColorTwo: "var(--third-color-two)",
        thirdColorThree: "var(--third-color-three)",
        thirdColorFour: "var(--third-color-four)",
        thirdColorFive: "var(--third-color-five)",
        thirdColorSix: "var(--third-color-six)",
        thirdColorSeven: "var(--third-color-seven)",
        thirdColorEight: "var(--third-color-eight)",
        thirdColorNine: "var(--third-color-nine)",
        thirdColorTen: "var(--third-color-ten)",
        thirdColorEleven: "var(--third-color-eleven)",
        thirdColorTwelve: "var(--third-color-twelve)",
        thirdColorThirteen: "var(--third-color-thirteen)",
        thirdColorFourteen: "var(--third-color-fourteen)",
        colorFormYellow: "var(--color-form-yellow)",

        //status colors
        colorActive: "var(--status-active)",
        colorActiveBg: "var(--status-active-bg)",
        colorDeactive: "var(--status-deactive)",
        colorDeactiveBg: "var(--status-deactive-bg)",
        colorPending: "var(--status-pending)",
        colorPendingBg: "var(--status-pending-bg)",
        colorExpired: "var(--color-error-red)",
        colorExpiredBg: "var(--color-error-redBg)",
        colorRunning: "var(--status-running)",
        colorRunningBg: "var(--status-running-bg)",
        assignIndi: "var(--assign-type-indi)",
        assignGroup: "var(--assign-type-group)",
        colorApproved: "var(--status-approved)",
        colorApprovedBg: "var(--status-approved-bg)",
      },
      screens: {
        xsm: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1680px",
        "4gs": "712px",
      },
      borderWidth: {
        DEFAULT: "0.75px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        full: "9999px",
        large: "12px",
      },
      fontSize: {
        xxxs: "0.5rem", //8px
        xxs: "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.125rem", //18px
        xl: "1.25rem", //20px
        "1xl": "1.375rem", //22px
        "2xl": "1.5rem", //25px
        "3xl": "1.875rem", //30px
        "4xl": "2rem", //36px
      },
    },
    plugins: [],
  },
};
