import PropTypes from "prop-types";
export default function KanbanIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.6" cy="9.6" r="1.6" stroke={color} strokeWidth="1.5" />
      <path
        d="M12.8004 14.3998C12.8004 15.2835 12.8004 15.9998 9.60039 15.9998C6.40039 15.9998 6.40039 15.2835 6.40039 14.3998C6.40039 13.5161 7.83308 12.7998 9.60039 12.7998C11.3677 12.7998 12.8004 13.5161 12.8004 14.3998Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M4 11.9996C4 8.98262 4 7.47413 4.93726 6.53687C5.87452 5.59961 7.38301 5.59961 10.4 5.59961H13.6C16.617 5.59961 18.1255 5.59961 19.0627 6.53687C20 7.47413 20 8.98262 20 11.9996C20 15.0166 20 16.5251 19.0627 17.4624C18.1255 18.3996 16.617 18.3996 13.6 18.3996H10.4C7.38301 18.3996 5.87452 18.3996 4.93726 17.4624C4 16.5251 4 15.0166 4 11.9996Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M17.5996 12H14.3996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.5996 9.59961H13.5996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.5996 14.4004H15.1996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
KanbanIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
