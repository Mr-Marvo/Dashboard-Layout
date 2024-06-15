import { BrowserRouter } from "react-router-dom";
import Routerset from "./routes/Routerset";
import { ConfigProvider, theme } from "antd";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./app/domain/context/ThemeContext";
import { TinyColor } from "@ctrl/tinycolor";
import { getPushToken, onMessageListener } from "./firebase";
import { NotificationContext } from "./app/domain/context/NotificationContext";

const colors1 = ["#009F79", "#11E840"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function App() {
  const { openNotification, setToken } = useContext(NotificationContext);
  const { primary, themeColor, algorithm } = useContext(ThemeContext);

  useEffect(() => {
    getPushToken(setToken);
  });

  // onMessageListener()
  //   .then((payload) => {
  //     openNotification(
  //       "success",
  //       payload.notification.title,
  //       payload.notification.body
  //     );
  //   })
  //   .catch((err) => console.log("failed: ", err));

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .catch((err) => {
          console.log("Service Worker registration failed:", err);
        });
    });
  }

  const containerStyle = {
    width: "100%",
    maxWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: themeColor,
    border: "1px",
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          algorithm === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          colorPrimary: primary,
          fontFamily: "Mona-Sans",
        },
        components: {
          Table: {
            headerColor: "rgb(0, 159, 121)",
            headerBg: "rgba(44, 192, 255, 0.3)",
            headerSplitColor: "rgb(0, 159, 121)",
            footerBg: "rgba(38, 255, 177, 0.2)",
            colorBgContainer: "var(--table-bg)",
            rowHoverBg: "var(--table-hover-bg)",
          },

          Notification: {
            paddingContentHorizontalLG: 12,
            paddingMD: 6,
            paddingLG: 12,
            fontSizeLG: 14,
            controlHeightLG: 40,
            colorBgElevated: "#36AE42",
            colorIcon: "rgb(255, 255, 255)",
            colorTextHeading: "rgba(254, 254, 254, 0.88)",
            colorIconHover: "rgb(255, 255, 255)",
          },
          Spin: {
            colorPrimary: "var(--color-green)",
          },
          Button: {
            defaultBg: "#000000",
            defaultHoverBg: "#000000",
            colorPrimary: `linear-gradient(90deg, ${colors1.join(", ")})`,
            colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
              colors1
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
              colors1
            ).join(", ")})`,
          },
          Drawer: {
            colorBgElevated: themeColor,
          },
          Popover: {
            colorBgElevated: themeColor,
            boxShadowSecondary:
              algorithm === "dark"
                ? "0px 0px 8px 0px rgba(0, 0, 0, 0.5)"
                : "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
          },
          Input: {
            colorBgContainer: algorithm === "dark" ? "#2E2E2E" : "#FFFFFF",
            fontSizeSM: 10,
            fontSize: 12,
            fontSizeLG: 14,
          },
          DatePicker: {
            colorBgContainer: algorithm === "dark" ? "#2E2E2E" : "#FFFFFF",
            fontSizeSM: 10,
            fontSize: 12,
            fontSizeLG: 14,
          },
          Checkbox: {
            colorBgContainer: algorithm === "dark" ? "#2E2E2E" : "#FFFFFF",
          },
          Select: {
            colorBgContainer: algorithm === "dark" ? "#2E2E2E" : "#FFFFFF",
            fontSizeSM: 10,
            fontSize: 12,
            fontSizeLG: 14,
          },
          Modal: {
            colorBgElevated: themeColor,
          },
          Form: {
            fontSizeSM: 10,
            fontSize: 12,
            fontSizeLG: 14,
          },
        },
      }}
    >
      <div
        style={containerStyle}
        className={`${
          algorithm === "dark" ? "dark-mode-color" : "light-mode-color"
        }`}
      >
        <BrowserRouter>
          <Routerset />
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
