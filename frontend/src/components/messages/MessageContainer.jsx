import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../store/conversationSlice";

function MessageContainer() {
  const selectedConversation = useSelector((state) => state.convo.selectedConversation);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => dispatch(setSelectedConversation(null));
},[dispatch])

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-orange-400/40 px-4 py-2 mb-2">
            {/* <span className="label-text">To:</span> */}
            <span className="text-gray-900 font-bold ml-4">{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const authUser = useSelector((state) => state.auth.userData);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser?.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
