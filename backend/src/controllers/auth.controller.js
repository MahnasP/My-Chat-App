import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const generateAccessToken = function (userid) {
  return jwt.sign({ userid }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
};

const signup = asyncHandler(async (req, res) => {
  const { username, fullname, password, confirmPassword, gender } = req.body;
  console.log(username);
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords don't match" });
  }

  const user = await User.findOne({ username });
  if (user) return res.status(400).json({ error: "User already exists" });
  const profilePic =
    "https://avatar.iran.liara.run/public/" +
    (gender === "male" ? "boy" : "girl");

  const createdUser = await User.create({
    username,
    fullname,
    password,
    gender,
    profilePic,
  });

  const accessToken = generateAccessToken(createdUser._id);

  res
    .status(201)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    })
    .json({
      _id: createdUser._id,
      fullname: createdUser.fullname,
      username: createdUser.username,
      profilePic: createdUser.profilePic,
    });
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "User does not exist" });
  const ispassvalid = await user.isPasswordCorrect(password);
  if (!ispassvalid)
    return res.json({ error: "Invalid username or password" }).status(400);

  const accessToken = generateAccessToken(user._id);

  res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    })
    .json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
});

const logout = asyncHandler(async (req, res) => {
  res
    .status(200)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
    })
    .json({ message: "Logged Out" });
});

export { signup, login, logout };
