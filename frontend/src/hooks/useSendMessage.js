import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../store/conversationSlice';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const selectedConversation = useSelector((state) => state.convo.selectedConversation);
    const messages = useSelector((state) => state.convo.messages);
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await axios.post(`/api/messages/send/${selectedConversation._id}`, { message });
            const data = response.data;
            if (data.error) throw new Error(data.error);

            dispatch(setMessages([...messages, data]));
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };
}

export default useSendMessage