import User from "../models/userSchema.js";
import JWT from "jsonwebtoken";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../utils/customError.js";

export const isLoggedIn = asyncHandler(async (req, _res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new CustomError("Not authorized to access this route", 401);
  }

  try {
    const decodedJwtPayload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedJwtPayload._id);

    next();
  } catch (error) {
    throw new CustomError(
      "Not authorized to access this route. Please login!",
      401
    );
  }
});
