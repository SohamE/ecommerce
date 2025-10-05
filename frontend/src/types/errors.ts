export interface ApiError {
  message: string;
  statusCode?: number;
  details?: String;
}

export class AppError extends Error {
  statusCode?: number;
  details?: String;

  constructor(message: string, statusCode?: number, details?: String) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
  }
}