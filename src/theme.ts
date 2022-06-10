import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#a80874",
    },
    secondary: {
      main: "#0e7c7b",
    },
    info: {
      main: "#92bfb1",
    },
  },
});

export default theme;
