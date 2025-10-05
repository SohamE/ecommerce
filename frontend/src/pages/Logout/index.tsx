import { useEffect } from "react";
import { logout } from "../../api/auth";
import { Navigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Logout = () => {
  const { updateUser, updateUserAuthentication } = useAuthContext();
  useEffect(() => {
    const logoutAndCleanUser = async () => {
      await logout();
      updateUser(undefined);
      updateUserAuthentication(false);
    };

    logoutAndCleanUser();
  }, []);
  return <Navigate to="/" replace />;
};

export default Logout;
