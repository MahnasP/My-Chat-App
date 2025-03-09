import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import LoadingPage from "./components/LoadingPage";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import useSocket from "./hooks/useSocket";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useSocket(); // Initialize socket connection

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  return !loading ? (
    <>
      <div>
        <Toaster />
      </div>
      <div className=" p-4 h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </>
  ) : (
    <LoadingPage />
  );
}

export default App;
