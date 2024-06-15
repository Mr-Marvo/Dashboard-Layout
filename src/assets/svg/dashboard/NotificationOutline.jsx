import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const NotificationOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6666 9.00004V10C16.6666 13.1427 16.6666 14.7141 15.6903 15.6904C14.714 16.6667 13.1426 16.6667 9.99992 16.6667C6.85722 16.6667 5.28587 16.6667 4.30956 15.6904C3.33325 14.7141 3.33325 13.1427 3.33325 10C3.33325 6.85734 3.33325 5.286 4.30956 4.30968C5.28587 3.33337 6.85722 3.33337 9.99992 3.33337H10.9999"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="14.6667"
        cy="5.33337"
        r="2"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.5"
      />
      <path
        d="M6.66675 11.3334H12.6667"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.66675 13.6666H10.6667"
        stroke={algorithm === "dark" ? "white" : "#525252"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationOutline;
