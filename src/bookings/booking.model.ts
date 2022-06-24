export interface MemberStatusRequest {
  contact?: string;
  status?: Number;
}
export interface Place {
  place_id: number;
  place_name: string;
  place_latitude: number;
  place_longitude: number;
  place_city: string;
  place_image: string;
}

export interface Person {
  booking_member_id: number;
  member_email: string;
  member_name: string;
  bmstatus: number;
  member_phone_number: string;
  username: string;
  user_image: string;
}

export interface Invitation {
  booking_id?: number;
  title?: string;
  meeting_time?: Date;
  moment_creator?: number;
  moment_id?: number;
  booked_by?: number;
  status?: number;
  expired?: number;
  restaurant_approved?: number;
  creator_name?: any;
  place?: Place;
  people?: Person[];
}
export interface Moment {
  id: number;
  description: string;
  video_id: number;
  creator_n_followers: number;
  video_cover: string;
  video: string;
  creator_id: number;
  creator_name: string;
  creator_image: string;
}

export interface Creator {
  id: number;
  n_followers: number;
  name: string;
  email: string;
  image: string;
  phone: string;
}
export interface State {
  category: string;
  subcategory: string;
}
export interface RestaurantPeople {
  id: number;
  foreal_id: number;
  name: string;
  email: string;
  n_followers: number;
}

export interface Booking {
  state?: State;
  booking_id?: number;
  title?: string;
  meeting_time?: Date;
  booked_by?: number;
  place_id?: number;
  place_name?: string;
  place_image?: string;
  restaurant_approved?: number;
  status?: number;
  creator?: Creator;
  moment?: Moment;
  nr_participants?: number;
  people?: RestaurantPeople[];
}
