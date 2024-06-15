import { Typography } from "antd";
const { Text } = Typography;

export default function KanbanHeaderCol({
  title,
  count,
  backgroundColor,
  borderColor,
}) {
  return (
    <div className="w-full min-w-[240px] h-[40px] rounded-md flex justify-between items-center px-2 bg-secondarySeven ">
      <div className="flex items-center justify-start gap-1">
        <div
          className={`w-[16px] h-[16px] rounded-full`}
          style={{ backgroundColor: borderColor }}
        ></div>
        <div className="h-full">
          <Text className="flex justify-center items-center text-xs sm:text-sm 3xl:text-lg font-semibold">
            {title}
          </Text>
        </div>
      </div>
      <div
        className={`w-[30px] h-[27px] flex items-center justify-center rounded border`}
        style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
      >
        <Text className="flex justify-center items-center text-xs sm:text-sm 3xl:text-lg font-semibold">
          {count}
        </Text>
      </div>
    </div>
  );
}
