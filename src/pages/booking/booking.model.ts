export interface BookingSearchRequest {
  page: number;
  size: number;
}
export interface BookingMemer {
  booking_member_id: number;
  member_name: string;
  member_email: string;
  member_phone_number: string;
  status: number;
}

export interface Booking {
  booking_id: number;
  title: string;
  meeting_time: Date;
  status: number;
  created_at: Date;
  expired: number;
  place_name: string;
  place_latitude: number;
  place_longitude: number;
  place_image: string;
  place_email: string;
  place_phone: string;
  place_city: string;
  place_address: string;
  creator_name: string;
  creator_bio?: any;
  creator_pix: string;
  creator_phone: string;
  moment_video_url: string;
  moment_video_cover_url: string;
  booking_memers: BookingMemer[];
}

export interface BookingList {
  total?: number;
  bookings?: Array<Booking>;
}
