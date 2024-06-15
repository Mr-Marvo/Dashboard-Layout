import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import SubscriptionExpired from "../../../assets/svg/permissions/SubscriptionExpired";

const { Text } = Typography;

const SubscriptionExpire = () => {
  const navigateTo = useNavigate();
  return (
    <div className="w-full h-fit flex flex-col ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-[50%] h-[70%] flex flex-col items-center justify-center">
          <SubscriptionExpired />
          <Text className="text-center mt-5 mb-2 text-primary welcome-logo-subtitle">
            Subscription Expired!
          </Text>
          <Text className="text-sm text-center">
            Oops! your subscription has been expired!
          </Text>
          <Button
            type="primary"
            className="mt-2"
            onClick={() => navigateTo("/payment-subscription")}
          >
            Go to payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionExpire;
