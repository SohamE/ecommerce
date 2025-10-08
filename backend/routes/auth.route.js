import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { delay } from "../middleware/delay.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(delay, login);
router.route("/check-auth").get(protectRoute, delay, checkAuth);
router.route("/logout").get(protectRoute, logout);

router.route("/verify-email").post(verifyEmail);

export default router;
