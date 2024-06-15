import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const ProfileOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="10"
        cy="8"
        r="2"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <circle
        cx="9.99999"
        cy="10"
        r="6.66667"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M13.3804 15.3663C13.3986 15.6972 13.6816 15.9506 14.0124 15.9324C14.3433 15.9142 14.5968 15.6312 14.5785 15.3004L13.3804 15.3663ZM5.42145 15.3004C5.40323 15.6312 5.65669 15.9142 5.98756 15.9324C6.31843 15.9506 6.60142 15.6972 6.61963 15.3663L5.42145 15.3004ZM14.5785 15.3004C14.524 14.3091 14.3429 13.2842 13.613 12.5273C12.876 11.7629 11.7083 11.4 10 11.4V12.6C11.5748 12.6 12.3439 12.9399 12.7492 13.3603C13.1618 13.7881 13.3288 14.4299 13.3804 15.3663L14.5785 15.3004ZM6.61963 15.3663C6.67117 14.4299 6.8382 13.7881 7.25078 13.3603C7.65611 12.9399 8.42515 12.6 10 12.6V11.4C8.29168 11.4 7.12404 11.7629 6.38696 12.5273C5.65712 13.2842 5.476 14.3091 5.42145 15.3004L6.61963 15.3663Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
    </svg>
  );
};

export default ProfileOutline;
