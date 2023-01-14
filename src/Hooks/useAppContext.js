import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
