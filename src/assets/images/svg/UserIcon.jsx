import PropTypes from "prop-types";
export default function UserIcon({ size, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.9998"
        cy="7.2"
        r="3.2"
        stroke="#939292"
        strokeWidth="1.5"
      />
      <path
        d="M18.4001 16.3998C18.4001 18.388 18.4001 19.9998 12.0001 19.9998C5.6001 19.9998 5.6001 18.388 5.6001 16.3998C5.6001 14.4116 8.46548 12.7998 12.0001 12.7998C15.5347 12.7998 18.4001 14.4116 18.4001 16.3998Z"
        stroke="#939292"
        strokeWidth="1.5"
      />
    </svg>
  );
}
UserIcon.propTypes = {
  size: PropTypes.number,
};
