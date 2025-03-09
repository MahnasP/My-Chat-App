import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
function LogoutBtn() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  return (
      <div className='mt-4'>
      <BiLogOut onClick={() => {
        
        logout();
      }} className='w-6 h-6 hover:text-orange-400 cursor-pointer' />
      </div>
  )
}

export default LogoutBtn