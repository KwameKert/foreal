import { FunctionComponent, useRef, useState } from "react";
import { AppInput } from "../../../core/components/AppInput";
import { AppButton } from "../../../core/components/AppButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import { AppIconButton } from "../../../core/components/AppIconButton";

export const RestaurantSearch: FunctionComponent = () => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentSpace = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setActive(!active);
    setHeight(active ? "0px" : `100px`);
  };

  return (
    <>
      <div className="bg-gray-400 px-5 rounded-2xl mt-2 mb-8 border border-slate-300 transition duration-700 ease-in-out">
        <div className="flex flex-row items-center space-x-10">
          <div className="w-full">
            <AppInput label="Name" variant="standard" />
          </div>
          <div className="w-auto">
            <AppButton
              color="secondary"
              variant="outlined"
              text="Search"
              icon={<SearchIcon />}
              buttonStyles="text-gray-500"
            />
          </div>
          <div>
            <AppIconButton
              color="default"
              icon={<FilterListIcon />}
              handleCklick={handleToggle}
            />
          </div>
        </div>

        <div
          style={{ maxHeight: `${height}` }}
          className="overflow-auto transition-all duration-700 ease-in-out"
        >
          <p className="text-xs font-bold pb-10">Advanced filters</p>
        </div>
      </div>
    </>
  );
};
