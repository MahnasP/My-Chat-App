import React from 'react'

function Conversation() {
  return (
      <div className='flex gap-2 items-center hover:bg-orange-400 rounded-full p-2 py-1 cursor-pointer'>
          <div className='avatar online'>
              <div className=' w-12 rounded-full'>
                  <img/>
              </div>
          </div>

          <div className='flex flex-col flex-1 pl-2'>
              <p className='font-bold text-gray-200'>full name</p>
          </div>

          <div className='divider my-0 py-0 h-1 mx-2'></div>

        </div>
  )
}

export default Conversation