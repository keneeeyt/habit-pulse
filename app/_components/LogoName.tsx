import React from "react";
import AppIcon from "./AppIcon";

type Props = {};

const LogoName = (props: Props) => {
  return (
    <div className="flex gap-2 items-center sm:justify-start justify-center">
    <span className="text-2xl font-light flex items-center gap-2">
      <div className="p-2 rounded-md bg-primary">
        <AppIcon color="#ffffff" height="34" width="34" />
      </div>
      {/* The name of the app */}
      <span className="font-bold text-primary">Habit</span>
      <span className="font-light">Pulse</span>
    </span>
  </div>
  );
};

export default LogoName;
