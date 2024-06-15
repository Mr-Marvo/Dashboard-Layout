import { useMemo } from "react";

const ColorProfileImage = ({ color, name, textSize }) => {
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
      }}
      className="flex w-full h-full rounded-full items-center justify-center page-subtitle uppercase"
    >
      {initials}
    </div>
  );
};

export default ColorProfileImage;
