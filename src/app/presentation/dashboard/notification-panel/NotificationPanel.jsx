import { Drawer, Switch, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import NotificationOutline from "../../../../assets/svg/dashboard/NotificationOutline";
import CloseOutline from "../../../../assets/svg/actionIcons/CloseOutline";
import DashboardNotificationOutline from "../../../../assets/svg/dashboard/DashboardNotificationOutline";

const { Title, Text } = Typography;

const NotificationPanel = ({ handleClose, open }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const observer = useRef();

  useEffect(() => {
    fetchNotifications();
  }, [page]);

  const fetchNotifications = async () => {
    setLoading(true);
  };

  const lastItemRef = useRef();
  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
  }, [loading]);

  return (
    <Drawer
      placement="right"
      size="default"
      onClose={handleClose}
      open={open}
      closeIcon={null}
      getContainer={false}
      destroyOnClose={true}
      rootStyle={{ position: "fixed" }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col gap-2 h-full">
        <div className="flex flex-row justify-between">
          <div className="flex"></div>
          <div className="flex flex-row gap-2 items-center">
            <NotificationOutline className="flex w-[20px]" />
            <Title
              level={1}
              className="flex !text-sm lg:!text-base 3xl:!text-xl font-medium !mb-0 p-0"
            >
              Notification Center
            </Title>
          </div>
          <div
            className="flex cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <CloseOutline />
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-grow overflow-hidden">
          <div className="flex flex-row justify-between gap-2 mr-4">
            <Text className="flex flex-row gap-2 !text-xs lg:!text-sm 3xl:!text-lg items-center">
              Show Unread
              <Switch size="small" />
            </Text>
            <Text className="flex flex-row gap-2 !text-xs lg:!text-sm 3xl:!text-lg items-center cursor-pointer">
              Mark all as read
            </Text>
          </div>

          <div className="flex flex-col w-full h-full overflow-y-scroll gap-2">
            <>
              <div className="flex flex-col p-2 border border-primary rounded-md gap-2 cursor-pointer mr-4">
                <div className="flex flex-row gap-2 justify-between items-center">
                  <Text className="flex flex-row gap-2 !text-xs lg:!text-sm 3xl:!text-lg items-center font-medium">
                    <DashboardNotificationOutline />
                    Title
                  </Text>
                  <div className="flex h-3 w-3 rounded-full bg-primaryGreen"></div>
                </div>
                <Text className="flex !text-xs lg:!text-sm 3xl:!text-lg">
                  Description
                </Text>
              </div>
              <Text ref={lastItemRef} className="loading p-4 m-2 text-center">
                {loading && <p>Loading more notifications...</p>}
              </Text>
            </>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NotificationPanel;
