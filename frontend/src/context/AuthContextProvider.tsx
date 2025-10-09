import React, { createContext, useReducer } from "react";
import {
  authReducer,
  initialState as authInitialState,
} from "../reducers/authReducer";
import type { UserType } from "../types/user";
import {
  apiCheckAuth,
  apiLogin,
  apiLogout,
  apiSignup,
  type loginType,
  type signupType,
} from "../api/auth";
import { AppError } from "../types/errors";

type AuthContextProviderPropsType = {
  children: React.ReactNode;
};

export type AuthContextType = {
  user: UserType | undefined;
  loading: boolean;
  checkingAuth: Boolean;
  signup: (param: signupType) => Promise<void>;
  login: (param: loginType) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  refreshToken: () => void;
};

export const AuthProviderContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<AuthContextProviderPropsType> = ({
  children,
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const handleError = (e: unknown) => {
    if (e instanceof AppError) {
      console.error(e.message);
    } else if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("An unexpected error occurred");
    }
  };

  const login = async ({ email, password }: loginType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await apiLogin({ email, password });
      dispatch({ type: "SET_USER", payload: res.data.user });
    } catch (e) {
      handleError(e);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const signup = async ({ email, name, password }: signupType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await apiSignup({ email, name, password });
      dispatch({ type: "SET_USER", payload: res.data.user });
    } catch (e) {
      handleError(e);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const checkAuth = async () => {
    dispatch({ type: "SET_CHECK_AUTH", payload: true });
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await apiCheckAuth();
      dispatch({ type: "SET_USER", payload: res.data.user });
    } catch (e) {
      handleError(e);
    } finally {
      dispatch({ type: "SET_CHECK_AUTH", payload: false });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  const logout = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      await apiLogout();
    } catch (e) {
      handleError(e);
    } finally {
    }
  };

  const refreshToken = async () => {};

  return (
    <AuthProviderContext.Provider
      value={{
        user: authState.user,
        loading: authState.loading,
        checkingAuth: authState.checkingAuth,
        login,
        signup,
        checkAuth,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContextProvider;
