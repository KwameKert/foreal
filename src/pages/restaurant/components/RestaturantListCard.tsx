import Avatar from "@mui/material/Avatar";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../restaurant.model";

type RestaurantListCardProps = {
  restaurant: Restaurant;
};

export const RestaurantListCard: FunctionComponent<RestaurantListCardProps> = ({
  restaurant,
}) => {
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    console.log("Restaurant clicked", restaurant);
    navigate(`/app/restaurant/${restaurant.place_id}`, {
      state: restaurant,
    });
  };
  return (
    <div
      className=" rounded-2xl bg-white p-5 flex gap-6 items-center cursor-pointer"
      onClick={handleRestaurantClick}
    >
      <Avatar alt="Remy Sharp" src={restaurant.place_profile_image} />
      <p className="text-lg	font-semibold">{restaurant.place_name}</p>
      <p className="font-light	">{restaurant.place_address}</p>
      <p className="font-semibold">{restaurant.place_city}</p>
    </div>
  );
};
