import React from "react";

const NameIcon = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3333 4.66666C12.3333 6.32351 12.3333 7.66666 6.99996 7.66666C1.66663 7.66666 1.66663 6.32351 1.66663 4.66666C1.66663 3.0098 4.05444 1.66666 6.99996 1.66666C9.94548 1.66666 12.3333 3.0098 12.3333 4.66666Z"
        stroke="#009F79"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default NameIcon;
