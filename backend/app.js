import express from "express";
import authRoutes from "./src/routes/auth.routes.js"
import messageRoutes from "./src/routes/message.routes.js"
import userRoutes from "./src/routes/user.routes.js"
import cookieParser from "cookie-parser";
import { app } from "./src/socket/socket.js";



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


export { app };