import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
import Grid from "../components/settings/grid/Grid.jsx";
import GridOption from "../components/settings/gridOption/GridOption.jsx";
import UsersOutline from "../../../assets/svg/settings/UsersOutline.jsx";
import ListOutline from "../../../assets/svg/settings/ListOutline.jsx";
import CalendarOutline from "../../../assets/svg/settings/CalendarOutline.jsx";
import SupportOutline from "../../../assets/svg/settings/SupportOutline.jsx";
import CompanyOutline from "../../../assets/svg/settings/CompanyOutline.jsx";
import ProfileOutline from "../../../assets/svg/settings/ProfileOutline.jsx";
import FormOutline from "../../../assets/svg/settings/FormOutline.jsx";
import WorkflowOutline from "../../../assets/svg/settings/WorkflowOutline.jsx";
import ReportOutline from "../../../assets/svg/settings/ReportOutline.jsx";
import PaymentHistoryOutline from "../../../assets/svg/settings/PaymentHistoryOutline.jsx";
import BillingOutline from "../../../assets/svg/settings/BillingOutline.jsx";
import SubscriptionOutline from "../../../assets/svg/settings/SubscriptionOutline.jsx";
import SettingsOutlinePrimary from "../../../assets/svg/SettingsOutlinePrimary.jsx";

const Settings = () => {
  const settingOptions = [
    {
      title: "Section 1",
      color: "yellow-color-line",
      roles: [2, 3],
      options: [
        {
          color: "bg-[#ECBE47]",
          icon: <UsersOutline className="flex w-full" />,
          title: "Option 1",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#E98F3C]",
          icon: <ListOutline className="flex w-full" />,
          title: "Option 2",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#FB8166]",
          icon: <CalendarOutline className="flex w-full" />,
          title: "Option 3",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
      ],
    },
    {
      title: "Section 2",
      color: "blue-color-line",
      roles: [2, 3],
      options: [
        {
          color: "bg-[#4DB1DC]",
          icon: <SubscriptionOutline className="flex w-full" />,
          title: "Option 1",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#6F86D5]",
          icon: <PaymentHistoryOutline className="flex w-full" />,
          title: "Option 2",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#9D61E8]",
          icon: <BillingOutline className="flex w-full" />,
          title: "Option 3",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
      ],
    },
    {
      title: "Section 3",
      color: "light-green-color-line",
      roles: [2, 3],
      options: [
        {
          color: "bg-[#6CDB5A]",
          icon: <ReportOutline className="flex w-full" />,
          title: "Option 1",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#9BC427]",
          icon: <ReportOutline className="flex w-full" />,
          title: "Option 2",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
      ],
    },
    {
      title: "Sction 4",
      color: "rose-color-line",
      roles: [1, 2, 3, 4],
      options: [
        {
          color: "bg-[#F76AB6]",
          icon: <FormOutline className="flex w-full" />,
          title: "Option 1",
          description: "Description",
          url: "#",
          roles: [2, 3],
        },
        {
          color: "bg-[#CE5260]",
          icon: <WorkflowOutline className="flex w-full" />,
          title: "Option 2",
          description: "Description",
          url: "#",
          roles: [1, 2, 3, 4],
        },
      ],
    },
    {
      title: "Accounts",
      color: "green-color-line",
      roles: [1, 2, 3, 4],
      options: [
        {
          color: "bg-[#3CC3B2]",
          icon: <ProfileOutline className="flex w-full" />,
          title: "My Profile",
          description: "Edit & update your personal profile",
          url: "/my-profile",
          roles: [1, 2, 3, 4],
        },
        {
          color: "bg-[#5CB279]",
          icon: <CompanyOutline className="flex w-full" />,
          title: "Option 2",
          description: "Description",
          url: "#",
          roles: [3],
        },
      ],
    },
    {
      title: "Section 6",
      color: "blue-color-line",
      roles: [1, 2, 3, 4],
      options: [
        {
          color: "bg-[#4DB1DC]",
          icon: <SupportOutline className="flex w-full" />,
          title: "Option 1",
          description: "Description",
          url: "#",
          roles: [1, 2, 3, 4],
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center w-full h-full mx-auto">
      <div className="flex flex-col gap-4 p-8 max-w-[14400px] mx-auto items-start">
        <div className="flex">
          <Title level={1} className="flex page-title gap-1 items-center">
            <SettingsOutlinePrimary className="flex w-[20px]" />
            Settings
          </Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {settingOptions.map((settingOption, index) => {
            return (
              <Grid
                title={settingOption.title}
                colorClass={settingOption.color}
                key={index}
                roles={settingOption.roles}
              >
                {settingOption.options.map((option, id) => {
                  return (
                    <GridOption
                      color={option.color}
                      icon={option.icon}
                      title={option.title}
                      description={option.description}
                      url={option.url}
                      key={id}
                      roles={option.roles}
                    />
                  );
                })}
              </Grid>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
