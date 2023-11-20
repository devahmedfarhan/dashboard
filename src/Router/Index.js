import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import About from '../View/Pages/About';
import IndustriesSolutions from '../View/Pages/IndustriesSolutions';
import Resources from '../View/Pages/Resource';
import Home from '../View/Pages/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Job from '../View/Pages/Job';
import Layout from '../Layout/Layout';
import Dashboard from '../Admin/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';


const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log('isLoggedInIndex', isLoggedIn);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('authUser');
        console.log('userToken', userToken);
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job" element={<Job />} />
                <Route path="/about" element={<About />} />
                <Route path="/IndustriesSolutions" element={<IndustriesSolutions />} />
                <Route path="/resource" element={<Resources />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}

                {
                    isLoggedIn === true &&
                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoutes>
                                <Dashboard />
                            </ProtectedRoutes>
                        }
                    />
                }
                <Route path="*" element={<Navigate to='/dashboard' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index