import React from 'react'
import { BiLogOut } from "react-icons/bi";
function LogoutBtn() {
  return (
      <div className='mt-auto'>
          <BiLogOut className='w-6 h-6 text-white hover:text-orange-400 cursor-pointer'/>
      </div>
  )
}

export default LogoutBtn