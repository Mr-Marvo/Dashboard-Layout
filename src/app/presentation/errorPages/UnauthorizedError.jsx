import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import UnauthorizedErrorImg from "../../../assets/svg/permissions/UnauthorizedErrorImg";

const { Text } = Typography;

const UnauthorizedError = () => {
  const navigateTo = useNavigate();

  return (
    <div className="w-full max-w-[100vw] h-full min-h-screen flex flex-col ">
      <div className="w-full h-[90vh]  flex flex-col justify-center items-center">
        <div className=" w-[50%] h-[70%] flex flex-col items-center justify-center">
          <UnauthorizedErrorImg />
          <Text className="text-center mt-5 mb-2 text-primary welcome-logo-subtitle">
            Error! Unauthorized
          </Text>
          <Text className="text-sm text-center">Authorization required!</Text>
          <Button
            type="primary"
            className="mt-2"
            onClick={() => navigateTo("/")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedError;
//NotFound
