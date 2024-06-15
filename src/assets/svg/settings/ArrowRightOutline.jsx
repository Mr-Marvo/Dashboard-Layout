import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const ArrowRightOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.2 1.40001L4.8 5.00001L1.2 8.60001"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightOutline;
