import React from "react";
import { useMemo } from "react";

const CompanyColorProfileSmall = ({ color, name, textSize }) => {
  const initials = useMemo(() => {
    const isNumber = !isNaN(name);
    if (isNumber) {
      return name;
    }
    if (name?.trim().split(" ").length >= 2) {
      let fl = name.split(" ")[0][0];
      let sl = name.split(" ")[1][0];
      return fl + sl;
    } else {
      let fl = name[0];
      let sl = name[1];
      return fl + sl;
    }
  });
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        fontSize: `${textSize}`,
      }}
      className="w-full h-full flex p-1 text-white rounded-full items-center justify-center page-subtitle bg-primary uppercase"
    >
      {initials}
    </div>
  );
};

export default CompanyColorProfileSmall;
