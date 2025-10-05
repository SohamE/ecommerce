import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import generateJWTToken from "../utils/generateJWTToken.js";
import generateVerificationCode from "../utils/generateVerificationCode.js";
import bcrypt from "bcryptjs";

export const signup = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const verificationToken = generateVerificationCode();
  const user = await User.create({
    name,
    email,
    password,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
  });

  const token = generateJWTToken(res, user.id);
  res.cookie("token", token, {
    httpOnly: true, // XSS attacks
    secure: process.env.NODE_ENV == "production",
    sameSite: "strict", //csrf attach
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  await sendVerificationEmail(user.email, verificationToken);

  res.status(201).json({
    status: "success",
    data: {
      user,
      token,
    },
  });
});

export const verifyEmail = catchAsync(async (req, res) => {
  const { code } = req.body;
  const user = await User.findOne({
    verificationToken: code,
    verificationTokenExpiresAt: { $gt: Date.now() },
  });
  if (!user) {
    throw new AppError("User or token is invalid.", 400);
  }

  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;
  user.isVerified = true;
  await user.save();

  await sendWelcomeEmail(user.email, user.name);

  res.status(200).json({
    status: "success",
    message: "User verified successfully",
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.cookies.token);
  const user = await User.findOne({
    email,
  }).select("+password");
  // Check if user exists and creds are valid.
  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new AppError("Incorrect email or password", 401);

  // Generate and set cookies.
  const token = generateJWTToken(res, user.id);
  res.cookie("token", token, {
    httpOnly: true, // XSS attacks
    secure: process.env.NODE_ENV == "production",
    sameSite: "strict", //csrf attach
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  user.lastLogin = new Date();
  await user.save();

  // Send success response
  res.status(200).json({
    status: "success",
    data: {
      user,
      token,
    },
  });
});

export const logout = (req, res) => {
  console.log(`${req.user.name} is logged out successfully.`);
  res.clearCookie("token");
  res.status(200).json({
    status: "success",
    message: "User logged out successfully",
  });
};
