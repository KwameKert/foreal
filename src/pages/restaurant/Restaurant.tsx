import React, { useRef } from "react";
import { AppButton } from "../../core/components/AppButton";
import RestaurantList from "./components/RestaurantList";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useActions } from "../../hooks/useRestaurant";
//import { useSelector } from "../../hooks/useTypesSelector";

export const Restaurant = () => {
  const { uploadRestaurantExcel } = useActions();
  // const { restaurants } = useSelector(
  //   (state) => state.restaurant
  // );
  const inputFile = useRef<any>(null);
  const selectFile = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      var file = event.target.files[0];
      uploadRestaurantExcel(file);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="self-center">
          <p className="text-2xl font-semibold">Restaurants</p>
        </div>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={onChangeFile.bind(this)}
        />
        <AppButton
          color="primary"
          variant="outlined"
          text="Upload excel"
          icon={<UploadFileIcon />}
          buttonStyles="bg-red-500 text-gray-500"
          handleClick={selectFile}
        />
      </div>
      <RestaurantList />
    </>
  );
};
