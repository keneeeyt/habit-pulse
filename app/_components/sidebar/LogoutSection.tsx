import { SignOutButton } from "@clerk/nextjs";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const LogoutSection = () => {
  const logOutObject = {name: "Sign Out", icon: faRightFromBracket}
  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-28 hover:bg-gray-100 transition-all rounded-lg">
      <FontAwesomeIcon width={20} height={20} icon={logOutObject.icon} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default LogoutSection;
