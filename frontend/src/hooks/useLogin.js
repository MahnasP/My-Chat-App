import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";

const authapi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER}/api/auth`,
});

function validate({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}

function useLogin() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async ({ username, password }) => {
    if (!validate({ username, password })) return;
    setLoading(true);
    try {
      const response = await authapi.post("/login", {
        username,
        password,
      });
      const data = response.data;
      if (data.error) throw new Error(data.error);
      dispatch(authLogin(data));
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;
