import { Divider, Popover, Switch, Tag, Typography } from "antd";
import { useContext, useState } from "react";
import MenuIcon from "../../../../assets/images/svg/MenuIcon";
import { AiOutlineDown } from "react-icons/ai";
import UserIcon from "../../../../assets/images/svg/UserIcon";
import UserCircleIcon from "../../../../assets/images/svg/UserCircleIcon";
import DarkModeIcon from "../../../../assets/images/svg/DarkModeIcon";
import LogoutIcon from "../../../../assets/images/svg/LogoutIcon";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../domain/context/ThemeContext";
import KanbanIcon from "../../../../assets/images/svg/KanbanIcon";
import SettingsIcon from "../../../../assets/images/svg/SettingsIcon";
import MenuButtonIcon from "../../../../assets/images/svg/MenuButtonIcon";
import MobileViewDrawer from "../../components/mobile-view-drawer/MobileViewDrawer";
import UserColorProfile from "../../components/common/userColorProfile/UserColorProfile";
import { USER_ROLES } from "../../../../enums/Users";
import dayjs from "dayjs";
const { Text } = Typography;

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DashboardLayout() {
  //dependencies and states
  const { themeColor, themeHeaderColor, switchMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };

  const handleLogOutUser = async () => {};

  const handleThemeChange = async (e) => {
    if (e) {
      switchMode("dark");
    } else {
      switchMode("light");
    }
  };

  return (
    <>
      <div
        className="w-full max-w-[100vw] min-h-screen flex flex-col"
        style={{ backgroundColor: themeColor }}
      >
        {/* dashboard header */}
        <div
          className="w-full h-[60px] px-4 flex flex-row justify-between items-center fixed border-b-[0.2px] border-secondaryFive z-50"
          style={{ backgroundColor: themeHeaderColor }}
        >
          <div className="h-10 w-fit items-center justify-start hidden md:flex">
            <Link to="/">
              <Text className="font-bold text-blue-900 text-lg">
                My Dashboard
              </Text>
            </Link>
          </div>
          <div className="h-10 w-fit flex items-center justify-start md:hidden gap-4">
            <Text className="font-bold text-blue-900 text-xl">MD</Text>
            <div className="cursor-pointer" onClick={showDrawer}>
              <MenuButtonIcon color={"var(--secondary-one)"} />
            </div>
            <MobileViewDrawer close={onClose} openDrawer={openDrawer} />
          </div>
          <div className="flex flex-row justify-end items-center gap-4 p-2">
            <div className="h-full w-fit  hidden md:flex flex-row justify-center items-center lg:gap-4 gap-2">
              <Link className="cursor-pointer" to="/">
                <MenuIcon color={"var(--color-green)"} />
              </Link>
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/kanban");
                }}
              >
                <KanbanIcon color={"var(--color-green)"} />
              </div>
              <Link className="cursor-pointer" to="/settings">
                <SettingsIcon color={"var(--color-green)"} />
              </Link>
            </div>
            <div>
              <Popover
                content={
                  <div className="w-[270px] h-fit flex flex-col items-center justify-start">
                    <div className="w-full flex justify-center items-start">
                      <div className="w-[20%] flex-row-center">
                        <UserIcon size={22} />
                      </div>
                      <div className="w-[80%] flex flex-col items-start">
                        <div className="flex w-52">
                          <Text className="text-sm font-semibold mb-1 truncate ">
                            Nishan Premakumara
                          </Text>
                        </div>

                        <Tag className="bg-gradient-to-r from-[#009F79] to-[#11E840] text-[10px] font-semibold text-white mb-3">
                          {USER_ROLES[3]}
                        </Tag>
                        <Text className="text-sm font-medium">User ID</Text>
                        <Text className="text-base font-semibold text-primaryGreen">
                          UID 001
                        </Text>
                      </div>
                    </div>
                    <Divider className="my-4" />

                    {/* <Divider className="my-4" /> */}
                    <div className="w-full h-7 flex justify-center items-start cursor-pointer">
                      <div className="w-[20%] h-full flex-row-center">
                        <UserCircleIcon />
                      </div>
                      <div className="w-[80%] h-full flex flex-col items-start justify-center">
                        <Link className="cursor-pointer" to="/my-profile">
                          <Text className="text-sm font-semibold mb-1">
                            My Profile
                          </Text>
                        </Link>
                      </div>
                    </div>

                    <Divider className="my-4" />
                    <div className="w-full h-7 flex justify-center items-start">
                      <div className="w-[20%] h-full flex-row-center">
                        <DarkModeIcon />
                      </div>
                      <div className="w-[80%] h-full flex flex-row items-center justify-between">
                        <Text className="text-sm font-semibold mb-1 ">
                          Dark mode
                        </Text>
                        <Switch onChange={handleThemeChange} />
                      </div>
                    </div>

                    <Divider className="my-4" />
                    <button className="w-full" onClick={handleLogOutUser}>
                      <div className="w-full h-7 flex justify-center items-start  cursor-pointer">
                        <div className="w-[20%] h-full flex-row-center">
                          <LogoutIcon />
                        </div>
                        <div className="w-[80%] h-full flex flex-col items-start justify-center">
                          <Text className="text-sm font-semibold mb-1">
                            Log out
                          </Text>
                        </div>
                      </div>
                    </button>
                  </div>
                }
                placement="bottomRight"
                arrow={false}
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
              >
                <div className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                  <UserColorProfile
                    name="Nishan Premakumara"
                    color="#248f76"
                    size="32px"
                    textSize="14px"
                  />

                  <AiOutlineDown color="var(--secondary-three)" />
                </div>
              </Popover>
            </div>
          </div>
        </div>

        {/* outlet */}
        <div
          className="w-full mt-[60px] flex-1"
          style={{ backgroundColor: "themeColor" }}
        >
          <Outlet />
        </div>
      </div>
      {/* )} */}
    </>
  );
}
