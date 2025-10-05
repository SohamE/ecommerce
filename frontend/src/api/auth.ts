import type { AxiosResponse } from "axios";
import type { ApiResponse } from "../types/api";
import type { UserType } from "../types/user";
import { API_URL, axiosAuthInstance } from "./axiosInstance";

type signupType = Pick<UserType, "email" | "name"> & { password: String; };
type loginType = Pick<UserType, "email"> & { password: String; };

type AuthData = {
  user: UserType,
  token: String,
};

type CheckAuthData = {
  user: UserType;
};

export const signup = async ({ email, password, name }: signupType) => {
  const response = await axiosAuthInstance.post<ApiResponse<AuthData>>(`/signup`, { email, password, name });
  return response;
};

export const login = async ({ email, password }: loginType): Promise<ApiResponse<AuthData>> => {
  const response = await axiosAuthInstance.post<ApiResponse<AuthData>>(`/login`, { email, password });
  return response.data;
};

export const checkAuth = async (): Promise<ApiResponse<CheckAuthData>> => {
  const response = await axiosAuthInstance.get<ApiResponse<CheckAuthData>>(`/check-auth`);
  return response.data;
};