import React from 'react'
import { IoIosSend } from "react-icons/io";

function MessageInput() {
  return (
      <form className='px-4 my-3'>
          <div className='w-full relative'>
          <input type="text" placeholder="Send a message" className="input input-bordered w-full h-10 p-2.5 overflow-scroll" />
              <button type='submit' className='absolute end-0 inset-y-0 flex items-center pe-3 hover:scale-125'>
              <IoIosSend size={20}/>
            </button>
          </div>
      </form>
      
  )
}

export default MessageInput