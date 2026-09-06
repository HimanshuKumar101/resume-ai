const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = Router();
const authMiddleware = require("../middlewares/auth.middleware");

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @desc login a user
 * @access public
 *
 */

authRouter.post("/login", authController.loginUserController);

/**
 * @route GET/API/AUTH/LOGOUT
 * @description cLEAR Token from user cookie and add the token in blacklist
 * @access public
 *
 */

authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */

authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
