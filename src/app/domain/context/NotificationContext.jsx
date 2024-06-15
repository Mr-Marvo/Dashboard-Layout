import { ConfigProvider, notification } from "antd";
import { createContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

export const NotificationContext = createContext({});

export function NotificationContextProvider({ children }) {
  const [api, contextHolder] = notification.useNotification();
  const placement = "bottom";

  const [token, setToken] = useState(false);

  const openNotification = (type, title, description, key) => {
    api[type]({
      style: {
        paddingBottom: "6px",
        paddingTop: "14px",
      },
      message: title,
      getContainer: "false",
      description,
      key: key,
      icon:
        type === "success" ? (
          <FaRegCheckCircle className="text-white" />
        ) : (
          <RxCrossCircled className="text-white" />
        ),
      placement,
      className: `${
        type === "success" ? "bg-[#36AE42]" : "bg-red-500"
      } rounded-lg z-40`,
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        openNotification,
        token,
        setToken,
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Notification: {
              paddingMD: 15,
              colorIcon: "rgb(255, 255, 255)",
              colorTextHeading: "rgba(254, 254, 254, 0.88)",
              colorIconHover: "rgb(255, 255, 255)",
            },
          },
        }}
      >
        {contextHolder}
        {children}
      </ConfigProvider>
    </NotificationContext.Provider>
  );
}
