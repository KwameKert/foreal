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
      <div className="rounded border border-slate-300 ">
        {restaurants.place?.map((restaurant) => (
          <RestaurantListCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};
