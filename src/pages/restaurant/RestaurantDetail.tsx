import Avatar from "@mui/material/Avatar";
import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Map } from "./components/Map";
import { AppButton } from "../../core/components/AppButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AddRestaurant } from "./components/AddRestaurant";
import { useActions } from "../../hooks/useRestaurant";
import { useSelector } from "../../hooks/useTypesSelector";
import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
type RestaurantDetailProps = {};

export const RestaurantDetail: FunctionComponent<
  RestaurantDetailProps
> = ({}) => {
  const navigate = useNavigate();
  const params = useParams();
  const { fetchRestaurantById } = useActions();
  const { restaurant } = useSelector((state) => state.restaurant);

  useEffect(() => {
    fetchRestaurantById(Number(params.id));
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between">
        <AppButton
          color="primary"
          size="small"
          text="back"
          icon={<ArrowBackIcon />}
          buttonStyles="bg-red-500 text-gray-500"
          handleClick={() => navigate(-1)}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="self-center ">
          <p className="text-2xl font-semibold">
            Restaurant Detail
            <Tooltip title="More">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </p>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nisi provident numquam labore, vel Reiciendis nisi provident numquam
            labore, vel
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3 mt-4 ">
        <AddRestaurant restaurant={restaurant} label="Edit Restaurant" />
      </div>
      <div className="flex flex-row rounded-2xl gap-10 mt-4">
        <div className=" bg-white p-5 w-2/5">
          <Avatar
            alt="Remy Sharp"
            src={restaurant.profileImage}
            sx={{ width: 76, height: 76 }}
            className="mt-3"
            style={{ marginTop: "-40px" }}
          />
          <p className="text-2xl pb-3 font-semibold ">{restaurant.name}</p>
          <p className="text-base text-current ">{restaurant.address}</p>
          <p className="text-base font-semibold ">{restaurant.city} </p>
          <p className="font-light">{restaurant.description}</p>
        </div>
      </div>
    </>
  );
};
