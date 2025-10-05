import { RouterProvider } from "react-router";
import "./App.css";
import baseRouter from "./routers/baseRouter";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={baseRouter} />
    </AuthContextProvider>
  );
}

export default App;
