import { Chip } from "@mui/material";
import { FunctionComponent } from "react";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { METHODS } from "http";

type StatusProps = {
  restaurant_approved: number;
};
interface data {
  color: "primary" | "success" | "error" | "secondary" | "info" | undefined;
  label: string;
  icon?: any;
}
const MEMBER_STATUS: Array<data> = [
  {
    label: "Pending",
    icon: <HourglassFullIcon />,
    color: "secondary",
  },
  {
    label: "Pending",
    icon: <HourglassFullIcon />,
    color: "secondary",
  },
  {
    label: "Accepted",
    icon: <CheckCircleIcon />,
    color: "success",
  },
  { label: "Rejected", icon: <CancelIcon />, color: "error" },
];
export const StatusLabel: FunctionComponent<StatusProps> = ({
  restaurant_approved,
}) => {
  const label = MEMBER_STATUS[restaurant_approved]?.label;
  return (
    <Chip
      color={MEMBER_STATUS[restaurant_approved]?.color}
      label={label}
      icon={MEMBER_STATUS[restaurant_approved]?.icon}
      size="small"
    />
  );
};
