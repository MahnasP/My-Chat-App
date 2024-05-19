import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedConversation } from '../../store/conversationSlice';

function Conversation({ conversation, lastIdx }) {
    const dispatch = useDispatch();
    const selectedConversation = useSelector((state) => state.convo.selectedConversation)
    const isSelected = selectedConversation?._id === conversation._id;
    return (
      <>
            <div
                className={`flex gap-2 items-center hover:bg-accent rounded-full p-2 py-1 cursor-pointer
                             ${isSelected ? "bg-accent" : ""}`}
                onClick={()=>{dispatch(setSelectedConversation(conversation))}}
            >
            
          <div className='avatar online'>
              <div className=' w-12 rounded-full'>
                  <img
                      src={conversation.profilePic}
                      alt='avatar'
                  />
              </div>
          </div>

          <div className='flex flex-col flex-1 pl-2'>
              <p className='font-bold text-gray-200'>{conversation.fullname}</p>
          </div>

          
          

            </div>
            {!lastIdx?<div className='divider  my-0 py-1 h-1 mx-7'></div>:null}
            </>
  )
}

export default Conversation