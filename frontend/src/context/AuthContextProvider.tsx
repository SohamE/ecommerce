import React, { createContext, useReducer } from "react";
import {
  authReducer,
  initialState as authInitialState,
  type AuthType,
  type UserType,
} from "../reducers/authReducer";

type AuthContextProviderPropsType = {
  children: React.ReactNode;
};

type AuthContextType = {
  authState: AuthType;
  updateUser: (userData: UserType) => void;
  updateUserVerification: (valid: Boolean) => void;
};

export const AuthProviderContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<AuthContextProviderPropsType> = ({
  children,
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const updateUser = (userData: UserType) =>
    dispatch({ type: "UPDATE_USER", payload: userData });

  const updateUserVerification = (valid: Boolean) =>
    dispatch({ type: "AUTHENTICATE_USER", payload: valid });

  return (
    <AuthProviderContext.Provider
      value={{ authState, updateUser, updateUserVerification }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContextProvider;
