import React from "react";
import { Button, Typography } from "antd";
import NotFoundImg from "../../../assets/svg/permissions/NotFoundImg";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const NotFound = () => {
  const navigateTo = useNavigate();
  return (
    <div className="w-full h-fit flex flex-col ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-[50%] h-[70%] flex flex-col items-center justify-center">
          <NotFoundImg />
          <Text className="text-center mt-5 mb-2 text-primary welcome-logo-subtitle">
            Error! Not found
          </Text>
          <Text className="text-sm text-center">
            Oops! that page could not be found
          </Text>
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

export default NotFound;