import { Outlet, createBrowserRouter } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default baseRouter;
