import React from 'react'
import {  useSelector } from 'react-redux'
import { extractTime } from '../../utils/extractTime';

function Message({ message,authUser }) {
  
  const selectedConversation = useSelector((state) => state.convo.selectedConversation);
  const fromMe = authUser._id === message.senderId;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgcolor = fromMe ? "chat-bubble-accent" : "";
  const formattedTime = extractTime(message.createdAt);

  return (
     <div className = {`chat ${chatClassName}`} >
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img alt="chat bubble avatar" src={profilePic} />
      </div>
    </div>
    
      <div className={`chat-bubble pb-2 ${bubbleBgcolor}`}>{ message.message}</div>
      <div className="chat-footer">
      <time className="text-xs opacity-50">{formattedTime}</time>
    </div>
    
  </div >

  )
}

export default Message