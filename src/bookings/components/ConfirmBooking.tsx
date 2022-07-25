import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FunctionComponent } from "react";

type ConfirmBookingProps = {
  open: boolean;
  response: boolean;
  handleClose: () => any;
  handleResponse: (params: boolean) => void;
};
export const ConfirmBooking: FunctionComponent<ConfirmBookingProps> = ({
  handleClose,
  open,
  response,
  handleResponse,
}) => {
  let option: String = response ? "accept" : "decline";
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really want to <span className="font-bold">{option}</span> this
          invite? 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleResponse(response)}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};
