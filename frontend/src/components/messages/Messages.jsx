// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
import useSeeMessages from "../../hooks/useSeeMessages";

function Messages() {
  const { loading, messages,authUser } = useGetMessages();
  const lastMessRef = useRef();

  useSeeMessages();
  useListenMessages();

  useEffect(() => { 
    setTimeout(() => {
      lastMessRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && authUser && messages.map((message) => (
        <div key={message._id} ref={lastMessRef}>
          <Message message={message} authUser={authUser} />
        </div>
      ))}
      {loading && <><MessageSkeleton /><MessageSkeleton /></>}
      {!loading && messages.length === 0 &&
        (<p className="text-center text-gray-200"> Send a message to start the conversaton</p>)}
      
    </div>
  );
}

export default Messages;
