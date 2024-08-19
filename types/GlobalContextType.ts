import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemType"

export type GlobalContextType = {
  menuItemsObject: {
  menuItems: menuItemType[];
  setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  }
}