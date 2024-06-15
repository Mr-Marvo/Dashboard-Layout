import React from "react";

export const RemainingTimeCalculator = ({ time }) => {
  const givenDate = new Date(time);

  const givenDateTimeStamp = givenDate.getTime();

  const currentDate = new Date();
  const availableTimeInMinutes = Math.floor(
    (givenDateTimeStamp - currentDate) / 60000
  );

  const availableHours = Math.trunc(availableTimeInMinutes / 60);
  const availableMinutes = availableTimeInMinutes % 60;

  let returnValue = availableHours + " H " + availableMinutes + 1 + " Min";

  if (returnValue.includes("-")) {
    if (availableHours === 0) {
      return (
        <span className="text-red-500">{availableMinutes + 1 + " Min"}</span>
      );
    } else {
      return (
        <span className="text-red-500">
          {availableHours + " H " + Math.abs(availableMinutes + 1) + " Min"}
        </span>
      );
    }
  } else {
    if (availableHours === 0) {
      return <span>{availableMinutes + 1 + " Min"}</span>;
    } else {
      return (
        <span>
          {availableHours + " H " + Math.abs(availableMinutes + 1) + " Min"}
        </span>
      );
    }
  }
};
