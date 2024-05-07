import express from "express";
import authRoutes from "./src/routes/auth.routes.js"
import messageRoutes from "./src/routes/message.routes.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


export { app };