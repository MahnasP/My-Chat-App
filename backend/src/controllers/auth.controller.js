import { User } from "../models/User.model.js";
import asyncHandler from "../utils/asyncHandler.js"

const signup = asyncHandler(
    async (req, res) => {
        const { username, fullname, password, confirmPassword, gender } = req.body;
        console.log(username)
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });
        if (user)
            return res.status(400).json({ error: "User already exists" });
        const fnarr = fullname.split(" ");
        const tempapiname = fnarr.length > 1 ? fnarr[0] + "+" + fnarr[1] : fullname;
        const profilePic = "https://avatar.iran.liara.run/username?username=" + tempapiname;

        const createdUser = await User.create({
            username,
            fullname,
            password,
            gender,
            profilePic,
        });

        res.status(201).json({
            _id: createdUser._id,
            fullname: createdUser.fullname,
            username: createdUser.username,
            profilePic: createdUser.profilePic
        })
    }
)

const login = asyncHandler(
    async (req, res) => {
        res.send("login")
    }
)

const logout = asyncHandler(
    async (req, res) => {
        res.send("login")
    }
)

export {signup, login, logout}