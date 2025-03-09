import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";
import { socketService } from "../services/socket";

const useSeeMessages = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const messages = useSelector((state) => state.convo.messages);
  const authUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const socket = socketService.getSocket();
    if (!socket || !messages.length || !selectedConversation) return;

    const lastMessageIsFromOtherUser =
      messages[messages.length - 1].senderId !== authUser._id;

    if (lastMessageIsFromOtherUser) {
      socket.emit("markMessagesAsSeen", {
        currUserID: authUser._id,
        otherUserId: selectedConversation._id,
      });
    }

    socket.on("messagesSeen", ({ otherUserId }) => {
      if (otherUserId === authUser._id) {
        const updatedMessages = messages.map((message) => {
          if (!message.seen) {
            return { ...message, seen: true };
          }
          return message;
        });
        dispatch(setMessages(updatedMessages));
      }
    });

    return () => socket.off("messagesSeen");
  }, [authUser, selectedConversation, dispatch, messages]);
};

export default useSeeMessages;
