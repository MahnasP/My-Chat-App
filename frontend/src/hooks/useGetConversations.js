import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useLogout from "./useLogout";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER}/api`,
  withCredentials: true, // Added to include cookies in requests
});

function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { logout } = useLogout();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await api.get("/users");
        const data = response.data;

        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log("Error fetching conversations: ", error.response);
        if (error.response?.status === 401) {
          toast.error("Session expired, please log in again.");
          logout();
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
