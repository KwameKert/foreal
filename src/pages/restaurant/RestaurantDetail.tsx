import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Restaurant } from "./restaurant.model";

type RestaurantDetailProps = {};
interface LocationState {
  restaurant: Restaurant;
}

export const RestaurantDetail: FunctionComponent<
  RestaurantDetailProps
> = ({}) => {
  const { state } = useLocation();
  const { restaurant } = state as LocationState;

  //console.log(state);

  return (
    <>
      <div className="self-center">
        <p className="text-2xl font-semibold">{restaurant.place_name}</p>
      </div>
      <div className="flex flex-row justify-between rounded-2xl">
        <div className=" bg-white p-5">
          <p>lorem </p>
        </div>
      </div>
    </>
  );
};
