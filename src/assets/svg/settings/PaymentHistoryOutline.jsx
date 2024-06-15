import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const PaymentHistoryOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.17 3.33333H6.83001C6.05743 3.33333 5.67114 3.33333 5.35959 3.44173C4.76881 3.6473 4.30499 4.12479 4.1053 4.73297C4 5.05369 4 5.45136 4 6.2467V15.5828C4 16.1549 4.65666 16.4585 5.07206 16.0784C5.31612 15.8551 5.68388 15.8551 5.92794 16.0784L6.25 16.3731C6.67772 16.7645 7.32228 16.7645 7.75 16.3731C8.17772 15.9817 8.82228 15.9817 9.25 16.3731C9.67772 16.7645 10.3223 16.7645 10.75 16.3731C11.1777 15.9817 11.8223 15.9817 12.25 16.3731C12.6777 16.7645 13.3223 16.7645 13.75 16.3731L14.0721 16.0784C14.3161 15.8551 14.6839 15.8551 14.9279 16.0784C15.3433 16.4585 16 16.1549 16 15.5828V6.2467C16 5.45136 16 5.05369 15.8947 4.73297C15.695 4.12479 15.2312 3.6473 14.6404 3.44173C14.3289 3.33333 13.9426 3.33333 13.17 3.33333Z"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M9 9.33333L13.3333 9.33333"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.66667 9.33333H7.00001"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.66667 7H7.00001"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.66667 11.6667H7.00001"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 7H13.3333"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 11.6667H13.3333"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PaymentHistoryOutline;
