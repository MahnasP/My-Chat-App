import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
function LogoutBtn() {
  const { logout } = useLogout();
  return (
      <div className='mt-auto'>
          <BiLogOut onClick={logout} className='w-6 h-6 text-white hover:text-orange-400 cursor-pointer'/>
      </div>
  )
}

export default LogoutBtn