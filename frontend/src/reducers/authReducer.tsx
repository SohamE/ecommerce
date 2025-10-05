import type { UserType } from "../types/user";

export type AuthType = {
  user: UserType | undefined;
  isAuthenticated: Boolean;
  isLoading: Boolean;
};

type ActionType =
  | {
      type: "AUTHENTICATE_USER";
      payload: Boolean;
    }
  | { type: "UPDATE_USER"; payload: UserType }
  | { type: "SET_LOADER"; payload: Boolean };

export const initialState: AuthType = {
  user: undefined,
  isAuthenticated: false,
  isLoading: false,
};

export const authReducer = (
  state: typeof initialState,
  action: ActionType
): AuthType => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
      break;
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADER":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
