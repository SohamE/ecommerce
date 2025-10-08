import type { ApiResponse } from "../types/api";
import type { UserType } from "../types/user";
import { axiosAuthInstance } from "./axiosInstance";

export type signupType = Pick<UserType, "email" | "name"> & { password: String; };
export type loginType = Pick<UserType, "email"> & { password: String; };

type AuthData = {
  user: UserType,
  token: String,
};

export type CheckAuthData = {
  user: UserType;
};

export const apiSignup = async ({ email, password, name }: signupType) => {
  const response = await axiosAuthInstance.post<ApiResponse<AuthData>>(`/signup`, { email, password, name });
  return response.data;
};

export const apiLogin = async ({ email, password }: loginType): Promise<ApiResponse<AuthData>> => {
  const response = await axiosAuthInstance.post<ApiResponse<AuthData>>(`/login`, { email, password });
  return response.data;
};

export const apiCheckAuth = async (): Promise<ApiResponse<CheckAuthData>> => {
  const response = await axiosAuthInstance.get<ApiResponse<CheckAuthData>>(`/check-auth`);
  return response.data;
};

export const apiLogout = async (): Promise<ApiResponse<undefined>> => {
  const response = await axiosAuthInstance.get<ApiResponse<undefined>>(`/logout`);
  return response.data;
};