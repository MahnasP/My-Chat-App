import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import LoadingPage from './LoadingPage';

function AuthLayer({ children,authNeeded=true }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        if (authNeeded && authStatus !== authNeeded) {
            navigate("/login");
        }
        else if (!authNeeded && authStatus !== authNeeded)
            navigate("/");
        setLoading(false);
    }, [authStatus,navigate,authNeeded]);
  return (
      loading ? <LoadingPage /> : <>{children}</>
  )
}

export default AuthLayer