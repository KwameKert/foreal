import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Invitation } from "./bookings/Invitation";
import theme from "./theme";
import Admin from "./layouts/Admin";
import { Restaurant } from "./pages/restaurant/Restaurant";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Notification from "./core/components/Notification";

function App() {
  return (
    <>
      <div className="h-full">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Invitation />} />
            <Route path="/app" element={<Admin />}>
              <Route path="" element={<Dashboard />} />
              <Route path="restaurant" element={<Restaurant />} />
              <Route path="*" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
      <Notification />
    </>
  );
}

export default App;