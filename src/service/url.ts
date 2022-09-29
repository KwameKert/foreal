export const FETCH_RESTAURANT_URL = "admin/restaurants";
export const UPLOAD_RESTAURANT_EXCEL = "admin/upload_restaurant";
export const USER_INVITATION = "booking_confirm";
export const ADMIN_FETCH_INVITATION = "admin/all_bookings";
export const ADMIN_ADD_RESTAURANT = "admin/add_restaurant/";
export const ADMIN_UPDATE_RESTAURANT = "/admin/update_restaurant/";
export const USER_CREATE_BOOKING = "/admin/create_booking/";
export const getUserUpdateInvitation = (id: Number) =>
  `booking_confirm/${id}/memberstatus`;
export const RESTAURANT_INVITATION = `booking_confirm/booking`;
export const getMomentById = (id: Number) =>
  `admin/shared_moment/?moment_id=${id}`;

export const getBookingById = (id: Number) => `admin/booking/${id}`;
