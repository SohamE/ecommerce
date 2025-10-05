import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/check-auth").get(protectRoute, checkAuth);
router.route("/logout").get(protectRoute, logout);

router.route("/verify-email").post(verifyEmail);

export default router;
