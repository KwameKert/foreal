import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "../../hooks/useTypesSelector";
import { useEffect } from "react";

export default function Notification() {
  const { error } = useSelector((state) => state.restaurant);
  const [open, setOpen] = React.useState(false);
  const showNotification = () => {
    if (error) {
      setOpen(true);
    }
  };
  useEffect(() => {
    showNotification();
  }, [error]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    console.log("closing");
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
      />
    </div>
  );
}
