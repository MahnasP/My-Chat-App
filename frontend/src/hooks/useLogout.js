import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "../store/authSlice";

const authapi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER}/api/auth`,
  withCredentials: true, // Added to include cookies in requests
});

function useLogout() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await authapi.post("/logout");
      const data = response.data;
      if (data.error) throw new Error(response.data.error);
      dispatch(authLogout());
      localStorage.removeItem("userData");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}

export default useLogout;
