import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function AppLoader() {
  return (
    <Box sx={{ width: "100%" }} className="z-50 block absolute inset-0 w-ful">
      <LinearProgress color="primary" />
    </Box>
  );
}
