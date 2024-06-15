export const USER_STATUS = {
  1: {
    label: "ACTIVE",
    color: "text-colorActive",
    bgColor: "bg-colorActiveBg",
    borderColor: "border-colorActive",
  },
  2: {
    label: "DEACTIVATED",
    color: "text-colorDeactive",
    bgColor: "bg-colorDeactiveBg",
    borderColor: "border-colorDeactive",
  },
  3: {
    label: "PENDING",
    color: "text-colorPending",
    bgColor: "bg-colorPendingBg",
    borderColor: "border-colorPending",
  },
  4: {
    label: "EXPIRED",
    color: "text-colorExpired",
    bgColor: "bg-colorExpiredBg",
    borderColor: "border-colorExpired",
  },
  undefined: {
    label: "...",
    color: "text-colorPending",
    bgColor: "bg-colorPendingBg",
    borderColor: "border-colorPending",
  },
};

export const USER_ROLES = {
  1: "User",
  2: "Admin",
  3: "Company Owner",
  4: "Manager",
};
