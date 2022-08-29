import Avatar from "@mui/material/Avatar";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../restaurant.model";
import CategoryIcon from "@mui/icons-material/Category";
import { Chip } from "@mui/material";
import { categories } from "../../../utils/data";

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
        <p className="text-gray-700 text-base italic">
          {restaurant?.address?.substring(0, 10) + "..."}
        </p>
        <Chip
          color="secondary"
          label={categories.at(Number(restaurant.categoryId))}
          icon={<CategoryIcon />}
          size="small"
        />
      </div>
    </div>
  );
};
