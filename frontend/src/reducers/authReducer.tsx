import type { AuthContextType } from "../context/AuthContextProvider";

export type AuthType = Pick<
  AuthContextType,
  "user" | "loading" | "checkingAuth"
>;

type ActionType =
  | { type: "SET_USER"; payload: AuthType["user"] }
  | { type: "SET_LOADING"; payload: AuthType["loading"] }
  | { type: "SET_CHECK_AUTH"; payload: AuthType["checkingAuth"] };

export const initialState: AuthType = {
  user: undefined,
  loading: true,
  checkingAuth: true,
};

export const authReducer = (
  state: typeof initialState,
  action: ActionType
): AuthType => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_CHECK_AUTH":
      return {
        ...state,
        checkingAuth: action.payload,
      };
    default:
      return state;
  }
};
