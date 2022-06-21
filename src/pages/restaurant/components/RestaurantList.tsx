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
      <div className="">
        <div className="w-full flex flex-col gap-4 ">
          {restaurants.place?.map((restaurant) => (
            <RestaurantListCard
              restaurant={restaurant}
              key={restaurant.place_id}
            />
          ))}

          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">No. invites</TableCell>
                  <TableCell align="center">Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.location}</TableCell>
                    <TableCell align="center">{row.country}</TableCell>
                    <TableCell align="center">{row.invites}</TableCell>
                    <TableCell align="center">{row.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </div>
      </div>
    </>
  );
};
