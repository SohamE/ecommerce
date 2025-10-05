import { promisify } from "util";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync.js";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";

export const protectRoute = catchAsync(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) throw new AppError("User not logged in.", 401);

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findOne({
    _id: decoded.userId,
  });

  if (!user) throw new AppError("User not valid.", 401);
  req.user = user;
  next();
});
