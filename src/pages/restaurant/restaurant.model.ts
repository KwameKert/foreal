export interface RestaurantSearchRequest {
  page: number;
  size: number;
}

export interface Restaurant {
  place_id: number;
  manager_id?: any;
  place_name: string;
  place_profile_image: string;
  place_accepts_reservation: boolean;
  place_description: string;
  place_city: string;
  place_latitude: number;
  place_longitude: number;
  place_address: string;
  place_email?: any;
}

export interface RestaurantList {
  total?: number;
  place?: Array<Restaurant>;
}
