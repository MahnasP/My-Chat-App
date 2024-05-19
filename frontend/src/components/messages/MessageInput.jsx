import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
      <form className='px-4 my-3' onSubmit={handleSubmit}>
          <div className='w-full relative'>
        <input type="text" placeholder="Send a message" className="input input-bordered w-full h-10 p-2.5 overflow-scroll"
        value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
              <button type='submit' className='absolute end-0 inset-y-0 flex items-center pe-3 hover:scale-125'>
          {loading?<div className='loading loading-spinner'></div>:<IoIosSend size={20} />}
            </button>
          </div>
      </form>
      
  )
}

export default MessageInput