import { Button, Drawer, Select, Typography } from "antd";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import MenuIcon from "../../../../assets/images/svg/MenuIcon";
import KanbanIcon from "../../../../assets/images/svg/KanbanIcon";
import SettingsIcon from "../../../../assets/images/svg/SettingsIcon";
import { ThemeContext } from "../../../domain/context/ThemeContext";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

export default function MobileViewDrawer({ close, openDrawer }) {
  const { algorithm } = useContext(ThemeContext);
  let navigate = useNavigate();

  return (
    <Drawer
      title={
        <div className="h-full flex justify-start items-center gap-1">
          <Text className="font-bold text-blue-900 text-2xl">My Dashboard</Text>
        </div>
      }
      width={317}
      onClose={close}
      open={openDrawer}
      placement="left"
      closable={false}
      extra={
        <div onClick={close}>
          <AiOutlineLeft color={algorithm === "dark" ? "#d0d0d0" : "#939292"} />
        </div>
      }
    >
      <Button
        type="default"
        style={{ backgroundColor: "var(--secondary-seven)" }}
        icon={<MenuIcon color={"var(--color-green)"} />}
        className="flex flex-row justify-start items-center text-xs font-semibold h-9 w-[266px] mb-4"
        onClick={() => {
          navigate("/");
          close();
        }}
      >
        Dashboard
      </Button>
      <Button
        style={{ backgroundColor: "var(--secondary-seven)" }}
        type="default"
        icon={<KanbanIcon color={"var(--color-green)"} />}
        className="flex flex-row justify-start items-center text-xs font-semibold h-9 w-[266px] mb-4"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/kanban");
          close();
        }}
      >
        Kanban
      </Button>
      <Button
        style={{ backgroundColor: "var(--secondary-seven)" }}
        type="default"
        icon={<SettingsIcon color={"var(--color-green)"} />}
        className="flex flex-row justify-start items-center text-xs font-semibold h-9 w-[266px]"
        onClick={() => {
          navigate("/settings");
          close();
        }}
      >
        Settings
      </Button>
    </Drawer>
  );
}

MobileViewDrawer.propTypes = {
  close: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
};
