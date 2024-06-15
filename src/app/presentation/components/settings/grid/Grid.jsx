import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

const Grid = ({ title, colorClass, children, roles }) => {
  const userRole = 3;

  if (roles.includes(userRole)) {
    return (
      <div className="flex flex-col gap-2 p-2 rounded-lg  border border-secondarySix h-fit">
        <div className="flex flex-row gap-2 items-center">
          <Text className="flex text-secondaryTwo font-normal page-subtitle">
            {title}
          </Text>
          <div className={`${colorClass}`}></div>
        </div>
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default Grid;
