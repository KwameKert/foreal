import { Avatar } from "@mui/material";
import { FunctionComponent } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Person } from "../../store/reducers/bookingReducer";
import { PendingBadge, RejectedBadge, SuccessBadge } from "./BadgeStyles";

export const Participant: FunctionComponent<Person> = ({
  user_image,
  bmstatus,
  member_name,
}) => {
  const avatar = () => {
    switch (bmstatus) {
      case 1:
        return (
          <Tooltip title={`${member_name} (Pending)`}>
            <PendingBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Travis Howard" src={user_image} />
            </PendingBadge>
          </Tooltip>
        );
      case 2:
        return (
          <Tooltip title={`${member_name} (Accepted)`}>
            <SuccessBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              // badgeContent=""
            >
              <Avatar alt="Travis Howard" src={user_image} />
            </SuccessBadge>
          </Tooltip>
        );
      case 3:
        return (
          <Tooltip title={`${member_name} (Rejected)`}>
            <RejectedBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              // badgeContent=""
            >
              <Avatar alt="Travis Howard" src={user_image} />
            </RejectedBadge>
          </Tooltip>
        );
    }
  };
  return (
    <>
      {avatar()}
      {/* <Chip label={member_name} icon={<DoneIcon />} className="my-1 mr-2" /> */}
    </>
  );
};
