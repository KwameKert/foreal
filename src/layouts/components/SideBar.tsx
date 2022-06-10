import React, { FunctionComponent } from "react";
import List from "@mui/material/List";
import { MenuItem } from "./MenuItem";

type SidebarInterface = {
  menus: Array<Menu>;
};

type Menu = {
  name: string;
  icon: React.ReactElement;
  path: string;
};

export const SideBar: FunctionComponent<SidebarInterface> = ({ menus }) => {
  return (
    <>
      <div className="text-center py-5 text-red-500	">
        <p className="text-3xl font-bold	">Foreal </p>
      </div>

      <List>
        {menus.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </List>
    </>
  );
};
