import { useContext } from "react";
import { AuthProviderContext } from "../context/AuthContextProvider";

const useAuthContext = () => {
  const data = useContext(AuthProviderContext);
  if (!data) throw new Error("Auth context used outside provider");

  return data;
};

export default useAuthContext;
