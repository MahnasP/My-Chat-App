import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER}/api`,
});

function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await api.get("/users");
        const data = response.data;
        if (data.error) throw new Error(data.error);
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
