import React from "react";
import { Typography } from "antd";
import NoData from "../../../../../assets/svg/NoData";
const { Text } = Typography;

const NoDataAnim = ({ message }) => {
  return (
    <div className="flex flex-col gap-1 w-full justify-center items-center">
      <NoData />
      <Text className="text-secondaryThree">
        {message || "No data to display."}
      </Text>
    </div>
  );
};

export default NoDataAnim;
