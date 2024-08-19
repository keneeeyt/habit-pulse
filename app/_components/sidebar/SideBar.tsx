"use client"
import React from "react";
import LogoName from "../LogoName";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";


const SideBar = () => {
  return (
    <div className="border-r-2 h-screen p-10 flex flex-col gap-20">
      <LogoName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
};

export default SideBar;
