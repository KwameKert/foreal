import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";

type Menu = {
  name: string;
  icon: React.ReactElement;
  path: string;
};
export const MenuItem: FunctionComponent<Menu> = ({ name, icon, path }) => {
  const location = useLocation();

  return (
    <ListItem key={name} disablePadding className="bg-light">
      <ListItemButton
        component={Link}
        to={path}
        selected={location.pathname.includes(path)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
