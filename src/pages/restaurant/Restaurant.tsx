import React from "react";
import { AppButton } from "../../core/components/AppButton";
import RestaurantList from "./components/RestaurantList";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export const Restaurant = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="self-center">
          <p className="text-2xl font-semibold">Restaurants</p>
        </div>
        <AppButton
          color="primary"
          variant="outlined"
          text="Upload excel"
          icon={<UploadFileIcon />}
          buttonStyles="bg-red-500 text-gray-500"
        />
      </div>
      <RestaurantList />
    </>
  );
};
