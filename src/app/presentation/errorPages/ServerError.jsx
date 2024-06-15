import React from "react";
import ServerErrorImg from "../../../assets/svg/permissions/ServerErrorImg";
import { Typography } from "antd";
const { Text } = Typography;

const ServerError = () => {
  return (
    <div className="w-full max-w-[100vw] h-full min-h-screen flex flex-col ">
      <div className="w-full h-[10vh]  flex justify-between items-center flex-row pl-5"></div>
      <div className="w-full h-[90vh]  flex flex-col justify-center items-center">
        <div className=" w-[50%] h-[70%] flex flex-col items-center justify-center">
          <ServerErrorImg />
          <Text className="text-center mt-10 mb-2 text-primary welcome-logo-subtitle">
            Internal Server Error
          </Text>
          <Text className="text-sm text-center">
            We are experiencing an internal server Problem
          </Text>
          <Text className="text-sm text-center">Please try again later</Text>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
