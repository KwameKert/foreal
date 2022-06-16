import Avatar from "@mui/material/Avatar";
import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Restaurant } from "./restaurant.model";

type RestaurantDetailProps = {};

export const RestaurantDetail: FunctionComponent<
  RestaurantDetailProps
> = ({}) => {
  const { state } = useLocation();
  const restaurant = state as Restaurant;

  return (
    <>
      <div className="self-center">
        <p className="text-2xl font-semibold">Restaurant Details</p>
      </div>
      <div className="flex flex-row rounded-2xl gap-10 mt-4">
        <div className=" bg-white p-5 w-2/4	">
          <p>Maps </p>
        </div>
        <div className=" bg-white p-5 w-2/4">
          <Avatar
            alt="Remy Sharp"
            src={restaurant.place_profile_image}
            sx={{ width: 76, height: 76 }}
            className="mt-3"
            style={{ marginTop: "-40px" }}
          />
          <p className="text-2xl pb-3 font-semibold ">
            {restaurant.place_name}{" "}
          </p>
          <p className="text-base text-current ">{restaurant.place_address}</p>
          <p className="text-base font-semibold ">{restaurant.place_city} </p>
          <p className="font-light">{restaurant.place_description}</p>
        </div>
      </div>
    </>
  );
};
