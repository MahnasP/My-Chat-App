import React from 'react'

function Message() {
  return (
    <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div className="chat-header">
      Anakin
      <time className="text-xs opacity-50">12:46</time>
    </div>
    <div className="chat-bubble chat-bubble-accent">I hate you!</div>
    
  </div>
  )
}

export default Message