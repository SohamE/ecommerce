import type { UserType } from "../reducers/authReducer";
import { API_URL, axiosAuthInstance } from "./axiosInstance";

type signupType = Pick<UserType, "email" | "name"> & { password: String; };
type loginType = Pick<UserType, "email"> & { password: String; };

export const signup = async ({ email, password, name }: signupType) => {
  const response = await axiosAuthInstance.post(`/signup`, { email, password, name });
  return response.data;
};

export const login = async ({ email, password }: loginType) => {
  const response = await axiosAuthInstance.post(`/login`, { email, password });
  return response.data;
}; 