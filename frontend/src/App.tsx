import { RouterProvider } from "react-router";
import "./App.css";
import baseRouter from "./routers/baseRouter";
import { useEffect, useState } from "react";
import useAuthContext from "./hooks/useAuthContext";
import { checkAuth } from "./api/auth";

function App() {
  const { checkAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, []);

  return <RouterProvider router={baseRouter} />;
}

export default App;
