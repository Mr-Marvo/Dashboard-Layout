import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const WorkflowOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6666 9V10C16.6666 13.1427 16.6666 14.714 15.6903 15.6904C14.714 16.6667 13.1427 16.6667 9.99998 16.6667C6.85728 16.6667 5.28593 16.6667 4.30962 15.6904C3.33331 14.714 3.33331 13.1427 3.33331 10C3.33331 6.8573 3.33331 5.28595 4.30962 4.30964C5.28593 3.33333 6.85728 3.33333 9.99998 3.33333H11"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle
        cx="14.6667"
        cy="5.33333"
        r="2"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M6.24242 10.9091C6.00811 11.1434 6.00811 11.5233 6.24242 11.7576C6.47674 11.9919 6.85664 11.9919 7.09095 11.7576L6.24242 10.9091ZM8.19528 9.80474L8.61955 10.229H8.61955L8.19528 9.80474ZM9.13809 9.80474L9.56236 9.38047V9.38047L9.13809 9.80474ZM10.1953 10.8619L9.77102 11.2862L10.1953 10.8619ZM11.1381 10.8619L11.5624 11.2862L11.1381 10.8619ZM13.3334 8.66666H13.9334C13.9334 8.33529 13.6647 8.06666 13.3334 8.06666V8.66666ZM12.7334 10.3333C12.7334 10.6647 13.002 10.9333 13.3334 10.9333C13.6647 10.9333 13.9334 10.6647 13.9334 10.3333H12.7334ZM11.6667 8.06666C11.3353 8.06666 11.0667 8.33529 11.0667 8.66666C11.0667 8.99803 11.3353 9.26666 11.6667 9.26666V8.06666ZM7.09095 11.7576L8.61955 10.229L7.77102 9.38047L6.24242 10.9091L7.09095 11.7576ZM8.71383 10.229L9.77102 11.2862L10.6195 10.4377L9.56236 9.38047L8.71383 10.229ZM11.5624 11.2862L13.7576 9.09093L12.9091 8.2424L10.7138 10.4377L11.5624 11.2862ZM12.7334 8.66666V10.3333H13.9334V8.66666H12.7334ZM13.3334 8.06666H11.6667V9.26666H13.3334V8.06666ZM9.77102 11.2862C10.2657 11.7809 11.0677 11.7809 11.5624 11.2862L10.7138 10.4377C10.6878 10.4637 10.6456 10.4637 10.6195 10.4377L9.77102 11.2862ZM8.61955 10.229C8.64558 10.203 8.68779 10.203 8.71383 10.229L9.56236 9.38047C9.06769 8.88581 8.26568 8.88581 7.77102 9.38047L8.61955 10.229Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
    </svg>
  );
};

export default WorkflowOutline;