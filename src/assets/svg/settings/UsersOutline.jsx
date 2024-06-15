import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const UsersOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="7.99998"
        cy="6"
        rx="2.66667"
        ry="2.66667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <ellipse
        cx="7.99998"
        cy="13.3333"
        rx="4.66667"
        ry="2.66667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M14 11.3333C15.1695 11.5898 16 12.2393 16 13C16 13.6862 15.3242 14.2819 14.3333 14.5803"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UsersOutline;
