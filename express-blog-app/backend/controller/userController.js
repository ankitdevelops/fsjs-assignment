import asyncHandler from "../services/asyncHandler.js";
import User from "../models/userSchema.js";
// import CustomError from "../utils/customError.js";

export const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new CustomError("Please fill all the fields", 400);
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError("User already exists", 400);
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const token = user.getJwtToken();
  user.password = undefined;

  //   res.cookie("token", token, );

  res.status(200).json({
    username: user.username,
    _id: user._id,
    createdAt: user.updatedAt,
    updatedAt: user.updatedAt,
    token,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("please fill all the fields");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (isPasswordMatched) {
    const token = user.getJwtToken();

    //  set cookie
    // res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      username: user.username,
      _id: user._id,
      createdAt: user.updatedAt,
      updatedAt: user.updatedAt,
      token,
    });
  }

  throw new Error("incorrect password");
});
