import { Chip } from "@mui/material";
import React, { FunctionComponent } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Person } from "../../store/reducers/bookingReducer";

export const Participant: FunctionComponent<Person> = ({ member_name }) => {
  return (
    <>
      <Chip label={member_name} icon={<DoneIcon />} className="my-1 mr-2" />
    </>
  );
};
