import { Divider, Typography } from "antd";
import UserIcon from "../../../../assets/images/svg/UserIcon";
import CalendarIcon from "../../../../assets/svg/kanban/CalendarIcon";
import ClockOutlineIcon from "../../../../assets/svg/kanban/ClockOutlineIcon";
const { Text } = Typography;

export default function KanbanCommonCard() {
  return (
    <div className="w-full min-w-[240px] h-fit flex flex-col items-start justify-between rounded-md border border-secondaryFour p-2 my-2 cursor-pointer">
      <div className="w-full flex items-center justify-start gap-4">
        <div className="flex">
          <div className="w-20 h-20 rounded-full bg-blue-300"></div>
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="w-full flex items-center justify-between">
            <Text className="text-start text-secondaryThree text-xxs 3xl:text-sm font-semibold">
              Step
            </Text>
            <Text className="text-end text-secondaryOne text-xxs 3xl:text-sm font-bold">
              INV 001
            </Text>
          </div>
          <div className="w-full flex items-center justify-start pr-8">
            Title here
          </div>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex flex-col gap-2 justify-between w-full">
        <div className="flex flex-row justify-between gap-1 w-full">
          <div className="w-full flex justify-start items-center gap-1 mt-2">
            <UserIcon color={"var(--secondary-three)"} size={16} />

            <Text className="max-w-1/2 text-start text-secondaryOne text-xxs sm:text-xs 3xl:text-base font-medium truncate break-all">
              Hello
            </Text>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-1 w-full">
          <div className="w-full flex justify-start items-center gap-1 mb-2">
            <CalendarIcon size={"16px"} color={"var(--secondary-three)"} />
            <Text className="text-start text-secondaryOne text-xxs  3xl:text-sm font-normal">
              2024 June 02
            </Text>
          </div>
          <div className="flex flex-col gap-1 w-full justify-end items-end">
            <div className="flex gap-1 items-center mb-2">
              <ClockOutlineIcon color={"var(--color-green)"} />
              <Text
                className="text-end text-xxs 3xl:text-sm font-medium"
                style={{ color: "#36AE42" }}
              >
                10 Mins
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
