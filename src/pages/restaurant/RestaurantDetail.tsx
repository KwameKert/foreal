import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AppButton } from "../../core/components/AppButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AddRestaurant } from "./components/AddRestaurant";
import { useActions } from "../../hooks/useRestaurant";
import { useSelector } from "../../hooks/useTypesSelector";
import { Tooltip, IconButton, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { categories } from "../../utils/data";
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
      <div className="w-2/3">
        <img
          src="https://img.freepik.com/free-psd/close-up-shop-sign-mock-up_53876-57931.jpg?w=826&t=st=1661641480~exp=1661642080~hmac=014e7685d457a921dceb319e2899c6d8c5d3f35f6e0b4cfcc5fae1ed218af594"
          className="w-ful h-2/4 rounded-2xl"
        />
        <div className="py-5">
          <p className=" font-semibold text-2xl">{restaurant.name}</p>
          <p className="text-zinc-400	">{restaurant.address}</p>
        </div>

        <Divider />
        <div className="flex mt-3 gap-x-20">
          <div className="flex">
            <LocationOnIcon className="mt-2 mr-2" />
            <div>
              <p className="text-zinc-400 text-base">City</p>
              <p className="font-semibold">Torino</p>
            </div>
          </div>
          <div className="flex">
            <LocalPhoneIcon className="mt-2 mr-2" />
            <div>
              <p className="text-zinc-400 text-base">Phone</p>
              <p className="font-semibold">{restaurant.phone}</p>
            </div>
          </div>
          <div className="flex">
            <BeenhereIcon className="mt-2 mr-2" />
            <div>
              <p className="text-zinc-400 text-base">Category</p>
              <p className="font-semibold">
                {categories.at(Number(restaurant.categoryId))}
              </p>
            </div>
          </div>
          <div className="flex">
            <AlternateEmailIcon className="mt-2 mr-2" />
            <div>
              <p className="text-zinc-400 text-base">Email</p>
              <p className="font-semibold">{restaurant.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className=" font-semibold text-xl">Description</p>
          <p className="font-light">{restaurant.description}</p>
        </div>
      </div>
    </>
  );
};
