import React from "react";
import { Divider, Modal } from "antd";
import { Typography } from "antd";
import CloseOutline from "../../../../../../assets/svg/actionIcons/CloseOutline";
const { Title } = Typography;

const ActionDialog = ({ size, modelOpen, handleCancel, title, children }) => {
  return (
    <Modal
      open={modelOpen}
      onCancel={handleCancel}
      closeIcon={false}
      className="flex flex-col rounded-md"
      width={size}
      footer={null}
      destroyOnClose={true}
    >
      <div className="flex flex-row justify-between pt-1">
        <Title level={1} className="flex !text-sm 3xl:!text-lg font-semibold">
          {title}
        </Title>
        <button onClick={handleCancel}>
          <CloseOutline />
        </button>
      </div>
      <Divider className="flex my-2" />
      <div className="flex justify-center">{children}</div>
    </Modal>
  );
};

export default ActionDialog;
