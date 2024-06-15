import React, { useContext } from "react";
import { ConfigProvider, Typography } from "antd";
import { ThemeContext } from "../../../domain/context/ThemeContext";
const { Text } = Typography;
import { Dialog } from "../../../../assets/images/png";

const SignInLayout = ({ children }) => {
  const { themeColor } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBorderColor: "rgb(82, 196, 26)",
            defaultHoverBorderColor: "rgb(82, 196, 26)",
            defaultColor: "rgb(82, 196, 26)",
            defaultHoverColor: "rgb(82, 196, 26)",
            defaultActiveColor: "rgb(19, 194, 194)",
            defaultActiveBorderColor: "rgb(82, 196, 26)",
            borderWidth: 2,
            borderStyle: "solid",
          },
        },
      }}
    >
      <div
        className="relative min-h-screen h-full max-w-screen flex justify-center items-center"
        style={{ backgroundColor: themeColor }}
      >

        <div className="p-5 absolute top-0 right-0">
          <div className="flex flex-row justify-end pt-5 pr-5">
            <div className="bg-gradient-to-r from-[#43B0FF] to-[#67FF31] p-[1px] rounded-md">
              <div className="h-12 bg-primaryBgColor rounded-md p-2">
                <div className="flex flex-row justify-between">
                  <img src={Dialog} alt="dialog" className="w-8 h-8" />
                  <div className="flex flex-col text-start">
                    <Text className="text-[10px] font-normal">Need Help?</Text>
                    <Text className="text-xs font-normal text-[#0C8797]">
                      Contact support
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-48 md:mt-0">
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SignInLayout;
