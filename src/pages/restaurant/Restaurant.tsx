import React, { useEffect, useRef, useState } from "react";
import { AppButton } from "../../core/components/AppButton";
import { RestaurantList } from "./components/RestaurantList";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useActions } from "../../hooks/useRestaurant";
import { useSelector } from "../../hooks/useTypesSelector";
import Pagination from "@mui/material/Pagination";

const PER_PAGE = 10;

export const Restaurant = () => {
  const { uploadRestaurantExcel, fetchRestaurant } = useActions();
  const { restaurants } = useSelector((state) => state.restaurant);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [pageCount, setPageCount] = useState(restaurants.total);

  useEffect(() => {
    fetchRestaurant({ size: 10, page: currentPage });
  }, []);

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

  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    setPageCount(Math.ceil(Number(restaurants.total) / PER_PAGE));
    console.log("next page --> ", currentPage);
    fetchRestaurant({ size: 10, page: currentPage });
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
      <RestaurantList restaurants={restaurants} />
      <div className="flex justify-center py-2">
        <Pagination
          count={restaurants.total}
          page={currentPage}
          onChange={handlePageClick}
        />
      </div>
    </>
  );
};
