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
      className=" rounded-2xl bg-white p-5  cursor-pointer"
      onClick={handleRestaurantClick}
    >
      <Avatar alt="Remy Sharp" src={restaurant.profileImage} />
      <p className="text-lg	font-semibold mb-3"> {restaurant.name}</p>
      <p className="font-light text-sm">
        <MapIcon />
        {restaurant.address}
      </p>
      <p className="font-light italic text-sm">
        <LocationOnIcon /> {restaurant.city}
      </p>
    </div>
  );
};
