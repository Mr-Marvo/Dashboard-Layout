import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
import { Link } from "react-router-dom";
import ArrowRightOutline from "../../../../../assets/svg/settings/ArrowRightOutline";

const GridOption = ({ color, icon, title, description, url, roles }) => {
  const userRole = 3;

  if (roles.includes(userRole)) {
    return (
      <Link
        className="flex w-full p-2 flex-row gap-2 border border-colorTextGray rounded-lg items-center justify-start hover:border-secondaryThree cursor-pointer hover:shadow-md hover:shadow-secondarySix"
        to={url}
      >
        <div className="flex flex-1 w-full flex-row gap-2 items-center">
          <div className={`flex p-1 rounded-full w-8 h-8 ${color}`}>{icon}</div>
          <div className="flex flex-col">
            <Text className="option-title page-title">{title}</Text>
            <Text className="option-description page-subtitle">
              {description}
            </Text>
          </div>
        </div>
        <div className="flex p-1 bg-secondarySix rounded-full h-5 w-5 items-center justify-center">
          <ArrowRightOutline className="flex w-2" />
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default GridOption;
