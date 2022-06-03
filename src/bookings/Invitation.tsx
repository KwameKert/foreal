import { Button, Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export function Invitation() {
  return (
    <>
      <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
        <div className="flex flex-col gap-y-7">
          <div className=" w-[35rem] p-8 card rounded-xl bg-white">
            <div className="flex flex-col  text-center">
              <p className=" text-2xl ">Hi 👋🏻</p>
              <p className=" text-2xl ">
                Reply to <span className="font-bold">Stacy</span> and get ready
                for <span className="font-bold">Diner for Ibrahim</span>
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Participants</p>
              <div className="flex gap-2">
                <Chip label="Kertice Asante" icon={<DoneIcon />} />
                <Chip label="Ekow Baah" icon={<HourglassTopIcon />} />
                <Chip label="Robert Laryea" icon={<CancelIcon />} />
              </div>
              <div className="mt-3">
                <p className="">
                  <AccessTimeIcon className="text-red-600" /> Tue May 31, 2022
                  2pm Central European Time - Stockholm
                </p>
                <p className="font-bold">
                  <LocationOnIcon className="text-red-600" /> Kista Galleria
                </p>
                <div className="mt-4">
                  <p className="font-bold">Notes</p>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi dolore reiciendis maiores sequi sed adipisci totam
                    magni quo, pariatur dolorem ducimus nulla cupiditate dolorum
                    eligendi. Blanditiis atque non necessitatibus magnam!
                  </p>
                </div>
                <div className="flex justify-center mt-3 gap-3">
                  <Button variant="contained" color="primary">
                    Accept
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 grid justify-items-center">
            <p className="text-3xl text-red-500	font-extrabold">foreal</p>
            <p className="text-gray-700	font-thin text-xs	">www.foreal.app</p>
            <Divider variant="middle" />
            <div>
              <p className="text-gray-700	 text-sm mt-6	">
                Download our app for your Android or IOS device
              </p>
              <div className="flex gap-6 justify-center mt-3">
                <img
                  src="/images/apple.png"
                  alt="apple-store"
                  className="w-28"
                />
                <img
                  src="/images/play.png"
                  alt="google-playstore"
                  className="w-28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
