import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../store/conversationSlice";

function Conversation({ conversation, lastIdx, onSelectConversation }) {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.convo.selectedConversation
  );
  const isSelected = selectedConversation?._id === conversation._id;
  const onlineUsers = useSelector((state) => state.socket.onlineUsers);
  const isOnline = onlineUsers.includes(conversation._id);

  const handleSelect = () => {
    dispatch(setSelectedConversation(conversation));
    if (onSelectConversation) {
      onSelectConversation();
    }
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-accent rounded-full p-2 py-1 cursor-pointer
                             ${isSelected ? "bg-accent" : ""}`}
        onClick={handleSelect}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className=" w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 pl-2">
          <p className="font-bold">{conversation.fullname}</p>
        </div>
      </div>
      {!lastIdx ? <div className="divider my-0 py-1 h-1 mx-7"></div> : null}
    </>
  );
}

export default Conversation;
