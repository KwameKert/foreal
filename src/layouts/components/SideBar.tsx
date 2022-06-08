import React, { FunctionComponent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

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
      <List>
        {menus.map((menu, index) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton component={Link} to={menu.path}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
