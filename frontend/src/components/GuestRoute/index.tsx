import { Navigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

type GuestRouteProps = {
  children: React.ReactNode;
};

const GuestRoute = ({ children }: GuestRouteProps) => {
  const { user } = useAuthContext();

  // If authenticated, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Not authenticated, show the page (login/signup)
  return <>{children}</>;
};

export default GuestRoute;
