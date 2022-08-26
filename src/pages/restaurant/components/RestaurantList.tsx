import { RestaurantSearch } from "./RestaurantSearch";
import { RestaurantListCard } from "./RestaturantListCard";
import {
  Restaurant,
  RestaurantList as RestaurantListInterface,
} from "../restaurant.model";
import { FunctionComponent } from "react";

type RestaurantListProps = {
  restaurants: RestaurantListInterface;
};
export const RestaurantList: FunctionComponent<RestaurantListProps> = ({
  restaurants,
}) => {
  return (
    <>
      <RestaurantSearch />
      <div className="grid grid-cols-3 gap-4">
        {restaurants.place?.map((restaurant) => (
          <RestaurantListCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};
