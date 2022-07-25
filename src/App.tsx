import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Booking } from "./pages/booking/Booking";
import theme from "./theme";
import Admin from "./layouts/Admin";
import { Restaurant } from "./pages/restaurant/Restaurant";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Notification from "./core/components/Notification";
import { Login } from "./auth/Login";
import AppLoader from "./core/components/AppLoader";
import { RestaurantDetail } from "./pages/restaurant/RestaurantDetail";
import { RestaurantBooking } from "./bookings/RestaurantBooking";
import { BookingDetail } from "./pages/booking/BookingDetail";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AppLoader />
      <div className="h-full">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/booking/:id" element={<RestaurantBooking />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/app" element={<Admin />}>
              <Route path="" element={<Dashboard />} />
              <Route path="restaurant" element={<Restaurant />} />
              <Route path="restaurant/:id" element={<RestaurantDetail />} />
              <Route path="booking" element={<Booking />} />
              <Route path="booking/:id" element={<BookingDetail />} />
              <Route path="*" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
      <ToastContainer />
      <Notification />
    </>
  );
}

export default App;
