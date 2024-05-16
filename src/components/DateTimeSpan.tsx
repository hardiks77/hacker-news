import React from "react";

const DateTimeSpan: React.FC<{ dateTimeString: string }> = ({
  dateTimeString,
}) => {
  const formattedDate = new Date(dateTimeString).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default DateTimeSpan;
