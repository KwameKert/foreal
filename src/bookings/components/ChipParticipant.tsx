import { Chip } from "@mui/material";
import { FunctionComponent } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Person, RestaurantPeople } from "../booking.model";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MEMBER_STATUS: Array<any> = [
  <HourglassFullIcon />,
  <HourglassFullIcon />,
  <CheckCircleIcon />,
  <CancelIcon />,
];

type Props = {
  name: string;
  status?: number;
};
export const ChipParticipant: FunctionComponent<Props> = ({
  name,
  status = 1,
}) => {
  return (
    <>
      <Chip label={name} icon={MEMBER_STATUS[status]} className="my-1 mr-2" />
    </>
  );
};
