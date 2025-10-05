export type ApiResponse<T> = {
  status: "success" | "error" | "failed",
  data: T,
  message?: String;
};