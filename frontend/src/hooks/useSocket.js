import io from "socket.io-client"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOnlineUsers, setSocket } from "../store/socketSlice";

function useSocket() {
    const authUser = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const socket = useSelector((state) => state.socket.socket);
    useEffect(() => {
        if (authUser) {
            const socket = io(import.meta.env.VITE_BACKEND_SERVER, {
                query: {userId:authUser._id}
            });
            dispatch(setSocket(socket));

            socket.on("getOnlineUsers", (users) => {
                dispatch(setOnlineUsers(users));
            })

            return () => socket.close();
        }
        else {
            if (socket) {
                socket.close();
                dispatch(setSocket(null));
            }
        }
    }, [authUser,dispatch]);

    return socket;
}

export default useSocket