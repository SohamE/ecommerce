import { RouterProvider } from "react-router";
import "./App.css";
import baseRouter from "./routers/baseRouter";
import { useEffect, useState } from "react";
import useAuthContext from "./hooks/useAuthContext";
import { checkAuth } from "./api/auth";

function App() {
  const { updateUser, updateUserAuthentication } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const response = await checkAuth();
        updateUser(response.data.user);
        updateUserAuthentication(true);
      } catch (e) {
        console.log("Not authenticated");
        updateUserAuthentication(false);
        updateUser(undefined);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserAuth();
  }, []);

  return isLoading ? "Loading..." : <RouterProvider router={baseRouter} />;
}

export default App;
