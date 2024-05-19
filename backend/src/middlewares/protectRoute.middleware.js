import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }
        const user = await User.findById(decoded.userid).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute;