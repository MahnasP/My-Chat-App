import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";
import { socketService } from "../services/socket";

function useListenMessages() {
  const messages = useSelector((state) => state.convo.messages);
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketService.getSocket();
    if (!socket) return;

    socket.on("newMessage", ({ newMessage, senderId }) => {
      if (senderId === selectedConversation._id) {
        newMessage.shouldShake = true;
        dispatch(setMessages([...messages, newMessage]));
      }
    });

    return () => socket.off("newMessage");
  }, [messages, dispatch, selectedConversation]);
}

export default useListenMessages;
