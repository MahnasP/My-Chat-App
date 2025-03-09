import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";

const useSeeMessages = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const messages = useSelector((state) => state.convo.messages);
  const authUser = useSelector((state) => state.auth.userData);
  const socket = useSelector((state) => state.socket.socket);
  useEffect(() => {
    const lastMessageIsFromOtherUser = messages.length &&
      messages[messages.length - 1].senderId !== authUser._id;
    if (lastMessageIsFromOtherUser) {
      socket.emit("markMessagesAsSeen", {
        currUserID: authUser._id,
        otherUserId: selectedConversation._id,
      });
    }


      //updating current user messages as seen after listening that this user's messages are seeen
    socket.on("messagesSeen", ({ otherUserId }) => {
      console.log(otherUserId === authUser._id);
      if (otherUserId === authUser._id) {
        const updatedMessages = messages.map((message) => {
          if (!message.seen) {
            return { ...message, seen: true };
          }
          return message;
        });
        console.log("my messages are seen")
        dispatch(setMessages(updatedMessages));
      }
    });
      
      return () => socket.off("messagesSeen");
  }, [socket, authUser, selectedConversation, dispatch, messages]);
};

export default useSeeMessages;
