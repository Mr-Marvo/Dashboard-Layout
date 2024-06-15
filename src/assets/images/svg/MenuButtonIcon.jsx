import PropTypes from "prop-types";
export default function MenuButtonIcon({ color }) {
  return (
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="26" height="4" rx="2" fill={color} />
      <rect y="10" width="26" height="4" rx="2" fill={color} />
      <rect y="20" width="26" height="4" rx="2" fill={color} />
    </svg>
  );
}
MenuButtonIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
