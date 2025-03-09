import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUsers } from "../store/socketSlice";
import { socketService } from "../services/socket";

function useSocket() {
  const authUser = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socket = socketService.connect(authUser._id);

      socket.on("getOnlineUsers", (users) => {
        dispatch(setOnlineUsers(users));
      });

      return () => socketService.disconnect();
    }
  }, [authUser, dispatch]);

  return socketService.getSocket();
}

export default useSocket;
