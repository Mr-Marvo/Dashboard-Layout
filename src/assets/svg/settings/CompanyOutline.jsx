import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const CompanyOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6667 16.6667L3.33333 16.6667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeLinecap="round"
      />
      <path
        d="M16 16.6667V6C16 4.74292 16 4.11438 15.6095 3.72386C15.2189 3.33333 14.5904 3.33333 13.3333 3.33333H12C10.7429 3.33333 10.1144 3.33333 9.72385 3.72386C9.40949 4.03822 9.34818 4.50681 9.33623 5.33333"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M12 16.6667V8C12 6.74292 12 6.11438 11.6095 5.72386C11.219 5.33333 10.5904 5.33333 9.33333 5.33333H6.66667C5.40959 5.33333 4.78105 5.33333 4.39052 5.72386C4 6.11438 4 6.74292 4 8V16.6667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M8.33333 16.1667V14.1667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 7.33333H10"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 9.33333H10"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 11.3333H10"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CompanyOutline;
