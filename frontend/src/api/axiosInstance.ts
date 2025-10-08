import axios, { AxiosError } from "axios";
import { AppError, type ApiError } from "../types/errors";

export const API_URL = "http://localhost:3000/api/auth";

export const axiosAuthInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  }
});
axiosAuthInstance.interceptors.request.use(request => request);
axiosAuthInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      const message = error.response.data.message || "An error occurred";
      const statusCode = error.response.data.statusCode;
      const stackTrace = error.response.data.details;

      throw new AppError(message, statusCode, stackTrace);
    } else if (error.request) {
      // Request made but no response
      throw new AppError("No response from server. Please check your connection.");
    } else {
      // Something else happened
      throw new AppError(error.message || "An unexpected error occurred");
    }

  }
);