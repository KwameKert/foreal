import { Chip } from "@mui/material";
import { FunctionComponent } from "react";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type StatusProps = {
  restaurant_approved: number;
};
const MEMBER_STATUS = [
  null,
  { label: "Resturant pending", icon: <HourglassFullIcon /> },
  { label: "Restaturant accepted", icon: <CheckCircleIcon /> },
  { label: "Restaturant rejected", icon: <CancelIcon /> },
];
export const StatusLabel: FunctionComponent<StatusProps> = ({
  restaurant_approved,
}) => {
  const label = MEMBER_STATUS[restaurant_approved]?.label;
  return (
    <Chip
      label={label}
      icon={MEMBER_STATUS[restaurant_approved]?.icon}
      size="small"
    />
  );
};
