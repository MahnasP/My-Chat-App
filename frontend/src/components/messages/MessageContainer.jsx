import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../store/conversationSlice";

function MessageContainer({ toggleSidebar }) {
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedConversation(null));
  }, [dispatch]);

  return (
    <div className="flex-1 flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected toggleSidebar={toggleSidebar} />
      ) : (
        <>
          <div className="bg-orange-400/40 px-4 py-2 mb-2 flex items-center">
            {/* Toggle sidebar button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden mr-2 p-1.5 btn btn-circle btn-soft"
              aria-label="Toggle sidebar"
            >
              <FaBars size={18} />
            </button>

            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <div className="flex-1 overflow-auto">
            <Messages />
          </div>
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = ({ toggleSidebar }) => {
  const authUser = useSelector((state) => state.auth.userData);
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      {/* Toggle button for no chat selected view */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 left-4 btn btn-circle btn-soft hover:bg-orange-300 transition-colors"
        aria-label="Toggle sidebar"
      >
        <FaBars size={18} />
      </button>

      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser?.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
