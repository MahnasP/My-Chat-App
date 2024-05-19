import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
function LogoutBtn() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  return (
      <div className='mt-auto'>
      <BiLogOut onClick={() => {
        navigate("/login");
        logout();
      }} className='w-6 h-6 text-white hover:text-orange-400 cursor-pointer' />
      </div>
  )
}

export default LogoutBtn