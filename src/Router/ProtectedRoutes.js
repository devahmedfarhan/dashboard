import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
 
const ProtectedRoutes = (props) => {
    console.log('props', props);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log('protected isLoggedIn', isLoggedIn);
 
    const checkUserToken = () => {
        const userToken = localStorage.getItem('authUser');
        if (!userToken || userToken === 'undefined') {
            return navigate('/login');
        }
        else {
            setIsLoggedIn(true);
            return navigate('/dashboard');
        }
    };
 
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props?.children : null
            }
        </>
    )
}
 
export default ProtectedRoutes