import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const CloseOutline = ({...props}) => {
  const { algorithm } = useContext(ThemeContext);
  
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="9.99998"
        r="6.66667"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.2"
      />
      <path
        d="M11.6667 8.33333L8.33337 11.6666M8.33336 8.33331L11.6667 11.6666"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseOutline;
