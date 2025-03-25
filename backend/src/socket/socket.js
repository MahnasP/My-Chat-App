import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";
import { Message } from "../models/message.model.js";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [process.env.FRONT_END_ORIGIN],
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: process.env.FRONT_END_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const userSocketMap = {}; //{userId:socketId}

export const getReceiverSocketId = (recieverId) => {
  return userSocketMap[recieverId];
};

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //to mark messages as seen
  socket.on("markMessagesAsSeen", async ({ currUserID, otherUserId }) => {
    try {
      await Message.updateMany(
        { senderId: otherUserId, receiverId: currUserID, seen: false },
        { $set: { seen: true } }
      );
      io.to(userSocketMap[otherUserId]).emit("messagesSeen", { otherUserId });
    } catch (error) {
      console.log("error in mark message as seen: ", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
