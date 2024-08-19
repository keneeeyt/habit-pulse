import { useGlobalContextProvider } from "@/context/GlobalContext";
import { menuItemType } from "@/types/MenuItemType";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSelection = () => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: menuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
};

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;

  const handleClickedItem = () => {
    const newMenuItems = menuItems.map((menuItem) => {
      if (menuItem.name === menuItemProp.name) {
        return { ...menuItem, isSelected: true };
      } else {
        return { ...menuItem, isSelected: false };
      }
    });
    setMenuItems(newMenuItems);
  }

  return (
    <div
      onClick={handleClickedItem}
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 
    ${menuItemProp.isSelected ? "bg-primary transition-all text-white" : "hover:bg-gray-100"}`}
    >
      <FontAwesomeIcon
        className=" "
        icon={menuItemProp.icon}
        width={20}
        height={20}
      />
      <div>{menuItemProp.name}</div>
    </div>
  );
}
export default MenuSelection;
