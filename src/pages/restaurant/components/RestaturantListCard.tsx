import Avatar from "@mui/material/Avatar";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../restaurant.model";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

type RestaurantListCardProps = {
  restaurant: Restaurant;
};

export const RestaurantListCard: FunctionComponent<RestaurantListCardProps> = ({
  restaurant,
}) => {
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate(`/app/restaurant/${restaurant.id}`, {
      state: restaurant,
    });
  };
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg  cursor-pointer "
      onClick={handleRestaurantClick}
    >
      <img
        className="w-full"
        src={restaurant.profileImage}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg">{restaurant.name}</div>
        <p className="text-gray-700 text-base italic">{restaurant.address}</p>
      </div>
    </div>
  );
};
