import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Invitation } from "./bookings/Invitation";
import theme from "./theme";

function App() {
  useEffect(() => {
    //fetchSermon();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Invitation />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
