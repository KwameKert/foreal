import { Box, Chip, CircularProgress } from "@mui/material";
import ReactPlayer from "react-player";
import { AppButton } from "../core/components/AppButton";
import CategoryIcon from "@mui/icons-material/Category";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useBooking";
import { useSelector } from "../hooks/useTypesSelector";
import { useEffect } from "react";

export const GetMoment = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { getMoment } = useActions();
  const { moment, loading } = useSelector((state) => state.booking);

  useEffect(() => {
    getMoment(Number(id));
  }, []);

  const Loader = () => {
    return (
      <div className="flex justify-center">
        <CircularProgress />
      </div>
    );
  };

  return (
    <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
      <p className="text-3xl font-bold text-red-700 mb-2">Foreal</p>
      <div className="flex flex-col gap-y-7">
        <div className="md:w-[35rem] w-full p-8  rounded-xl bg-white">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="grid justify-items-center">
                <ReactPlayer
                  width={"70%"}
                  height={"100%"}
                  className=" react-player fixed-bottom mb-6 "
                  url={moment.video_url}
                  controls={true}
                />
              </div>

              <div className="mb-2 mt-4 ">
                <p className="text-2xl font-bold text-left">
                  {moment.place_name}
                </p>
                <p className="italic">{moment.place_description}</p>
                <Chip
                  color="secondary"
                  label={moment.place_category}
                  icon={<CategoryIcon />}
                  size="small"
                />
              </div>

              <div className="grid justify-items-center">
                <AppButton
                  color="primary"
                  variant="contained"
                  text="Reserve a table"
                  buttonStyles="font-bold  "
                  handleClick={() => navigate(`/booking`)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
