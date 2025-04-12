import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER}/api`,
  withCredentials: true, // Added to include cookies in requests
});

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const messages = useSelector((state) => state.convo.messages);
  const authUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/messages/${selectedConversation._id}`);
        const data = response.data;
        if (data.error) throw new Error(data.error);
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, dispatch]);

  return { loading, messages, authUser };
}

export default useGetMessages;
