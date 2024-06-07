import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../store/conversationSlice";


function useListenMessages() {
    const socket = useSelector((state) => state.socket.socket);
    const messages = useSelector((state) => state.convo.messages);
    const selectedConversation = useSelector(
        (state) => state.convo.selectedConversation
      );
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on("newMessage", ({ newMessage, senderId }) => {
            if (senderId === selectedConversation._id) {
                newMessage.shouldShake = true;
                dispatch(setMessages([...messages, newMessage]));
            }
        })

        return () => socket.off("newMessage");
    }, [socket, messages, dispatch]);

}

export default useListenMessages