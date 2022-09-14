import Avatar from "@mui/material/Avatar";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../restaurant.model";
import CategoryIcon from "@mui/icons-material/Category";
import { Chip } from "@mui/material";
import { categories } from "../../../utils/data";
import { AppButton } from "../../../core/components/AppButton";

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
    <div className=" overflow-hidden p-5 border-b-2 border-slate-300">
      <div className="grid grid-cols-5 items-center space-x-5 gap-0">
        <Avatar alt="User name" src={restaurant.profileImage} />
        <div>
          <p className="font-medium">{restaurant.name}</p>

          {restaurant.categoryId && (
            <Chip
              color="secondary"
              label={categories.at(Number(restaurant.categoryId))?.label}
              icon={<CategoryIcon />}
              size="small"
            />
          )}
        </div>

        <div>
          <p className="font-medium">{restaurant.city}</p>

          <p className="text-xs">
            {restaurant?.address?.substring(0, 10) + "..."}
          </p>
        </div>

        <div>
          <p>{restaurant.email}</p>
          <p className="text-xs">{restaurant.phone}</p>
        </div>

        <AppButton
          color="primary"
          variant="text"
          text="View"
          buttonStyles="text-gray-500"
          handleClick={handleRestaurantClick}
        />
      </div>
    </div>
  );
};
