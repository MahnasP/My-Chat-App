import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

function Conversations({ onSelectConversation }) {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col pr-3">
      {conversations.map((convo, ind) => (
        <Conversation
          key={convo._id}
          conversation={convo}
          lastIdx={ind === conversations.length - 1}
          onSelectConversation={onSelectConversation}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
