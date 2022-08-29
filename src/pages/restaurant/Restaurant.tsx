import React, { useEffect, useRef, useState } from "react";
import { AppButton } from "../../core/components/AppButton";
import { RestaurantList } from "./components/RestaurantList";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useActions } from "../../hooks/useRestaurant";
import { useSelector } from "../../hooks/useTypesSelector";
import Pagination from "@mui/material/Pagination";
import { AddRestaurant } from "./components/AddRestaurant";
import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
const PER_PAGE = 12;

export const Restaurant = () => {
  const { uploadRestaurantExcel, fetchRestaurant } = useActions();
  const { restaurants } = useSelector((state) => state.restaurant);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRestaurant({ size: PER_PAGE, page: currentPage - 1 });
  }, []);

  const loadList = () => {
    fetchRestaurant({ size: PER_PAGE, page: currentPage - 1 });
  };

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
      setCurrentPage(0);
      fetchRestaurant({ size: PER_PAGE, page: currentPage });
      // event.target = null;
    }
  };
  const getPageCount = () => {
    if (Number(restaurants.total) > 0) {
      return Math.ceil(Number(restaurants.total) / PER_PAGE);
    }
  };

  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    fetchRestaurant({ size: PER_PAGE, page: value - 1 });
  };
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="self-center ">
          <p className="text-2xl font-semibold">
            Restaurants
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
        <AddRestaurant onDone={() => loadList()} />
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
      <RestaurantList restaurants={restaurants} />
      <div className="flex justify-center py-2">
        <Pagination
          count={getPageCount()}
          page={currentPage}
          onChange={handlePageClick}
        />
      </div>
    </>
  );
};
