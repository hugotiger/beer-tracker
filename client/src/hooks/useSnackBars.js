import { useContext } from "react";
import { SnackBarContext } from "../context/snackbar/SnackBarContext";

export const useSnackBars = () => useContext(SnackBarContext);
