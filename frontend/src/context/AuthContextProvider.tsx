import React, { createContext, useReducer } from "react";
import {
  authReducer,
  initialState as authInitialState,
  type AuthType,
} from "../reducers/authReducer";

type AuthContextProviderPropsType = {
  children: React.ReactNode;
};

type AuthContextType = {
  authState: AuthType;
  updateUser: (userData: AuthType["user"]) => void;
  updateUserAuthentication: (valid: AuthType["isAuthenticated"]) => void;
};

export const AuthProviderContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<AuthContextProviderPropsType> = ({
  children,
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const updateUser = (userData: AuthType["user"]) =>
    dispatch({ type: "UPDATE_USER", payload: userData });

  const updateUserAuthentication = (valid: AuthType["isAuthenticated"]) =>
    dispatch({ type: "AUTHENTICATE_USER", payload: valid });

  return (
    <AuthProviderContext.Provider
      value={{ authState, updateUser, updateUserAuthentication }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContextProvider;
