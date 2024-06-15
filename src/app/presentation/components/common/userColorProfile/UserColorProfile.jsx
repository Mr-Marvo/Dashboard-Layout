import { useMemo } from "react";

const UserColorProfile = ({ color, name, size, textSize }) => {
  const initials = useMemo(() => {
    if (name?.trim().split(" ").length >= 2) {
      let fl = name.split(" ")[0][0];
      let sl = name.split(" ")[1][0];
      return fl + sl;
    } else {
      let fl = name[0];
      let sl = name[1];
      return fl + sl;
    }
  });

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        fontSize: `${textSize}`,
        width: `${size}`,
        height: `${size}`,
      }}
      className="flex p-1 rounded-full items-center justify-center page-subtitle bg-primary uppercase"
    >
      {initials}
    </div>
  );
};

export default UserColorProfile;
