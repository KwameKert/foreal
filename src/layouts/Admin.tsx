import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { Outlet } from "react-router-dom";
import { DrawerHeader } from "./components/DrawerHeader";
import { SideBar } from "./components/SideBar";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Header } from "./components/Header";
import AppLoader from "../core/components/AppLoader";

const drawerWidth = 240;
interface Props {
  window?: () => Window;
}
export default function Admin(props: Props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menus = [
    {
      name: "Dashboard",
      icon: <HomeIcon />,
      path: "/app/dashboard",
    },
    {
      name: "Restaurants",
      icon: <RestaurantIcon />,
      path: "/app/restaurant",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerHeader></DrawerHeader>
            <Divider />
            <SideBar menus={menus} />
            <Divider />
          </Drawer>

          <Drawer
            className="border-2"
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "none",
              },
            }}
            open
          >
            <SideBar menus={menus} />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <AppLoader />

          <Outlet />
        </Box>
      </Box>
    </>
  );
}
