import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import asyncHandler from "../utils/asyncHandler.js";

const sendMessage = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let convo = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!convo) {
      convo = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
      const newMessage = await Message.create({ senderId, receiverId, message });
      
      if (newMessage) convo.messages.push(newMessage._id);
    await convo.save();
    
    //socket functionality:
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", { newMessage,senderId });
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

const getMessages = asyncHandler(async (req, res) => {
  try {
    const { id: otheruserId } = req.params;
    const senderId = req.user._id;
    const convo = await Conversation.findOne({
      participants: { $all: [senderId, otheruserId] },
    }).populate("messages");
    if (!convo) return res.status(200).json([]);
    const messages = convo.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { sendMessage, getMessages };
