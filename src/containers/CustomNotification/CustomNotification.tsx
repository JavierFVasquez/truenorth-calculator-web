import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { SyntheticEvent, forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorAction,
  selectError
} from "../../data/redux/reducers/error.reducer";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomNotification() {
  const [open, setOpen] = useState(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.error) {
      setOpen(true);
    }
  }, [error.error]);

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(errorAction({ clearError: true }));
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error.error}
      </Alert>
    </Snackbar>
  );
}
