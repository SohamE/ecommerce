import { Outlet, createBrowserRouter } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GuestRoute from "../components/GuestRoute";
import Logout from "../pages/Logout";

const NavbarLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const baseRouter = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
    ],
  },
]);

export default baseRouter;
