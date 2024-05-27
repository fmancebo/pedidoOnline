import { useContext } from "react";
import { SnackContext } from "../contexts/SnackContext";

function useSnack() {
  return useContext(SnackContext);
}

export default useSnack;
