import React, { useState } from "react";
import NotificationPanel from "./notification-panel/NotificationPanel";

const Dashboard = () => {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <div
        className="p-3 min-h-screen"
        onClick={() => {
          setShowNotification(true);
        }}
      >
        Dashboard (Click here)
      </div>

      {showNotification && (
        <NotificationPanel
          open={showNotification}
          handleClose={() => {
            setShowNotification(false);
          }}
        />
      )}
    </>
  );
};

export default Dashboard;
