"use client";
import SideBar from "@/app/_components/sidebar/SideBar";
import { useGlobalContextProvider } from "@/context/GlobalContext";
import { menuItemType } from "@/types/MenuItemType";
import React, { useEffect, useState } from "react";
import AllHabits from "./_components/all-habits/page";
import Statistics from "./_components/statistics/page";
import Areas from "./_components/areas/page";

function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectMenu, setSelectMenu] = useState<menuItemType | null>(null);
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectMenu?.name) {
    case "All Habits":
      selectComponent = <AllHabits />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
    case "Areas":
      selectComponent = <Areas />;
      break;
    default:
      selectComponent = <AllHabits />;
  }

  return (
    <div className="flex">
      <SideBar />
      <div>{selectComponent}</div>
    </div>
  );
}

export default Dashboard;
