import { Chip } from "@mui/material";
import { FunctionComponent } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Person, RestaurantPeople } from "../booking.model";

type Props = {
  name: string;
};
export const ChipParticipant: FunctionComponent<Props> = ({ name }) => {
  return (
    <>
      <Chip label={name} icon={<DoneIcon />} className="my-1 mr-2" />
    </>
  );
};
