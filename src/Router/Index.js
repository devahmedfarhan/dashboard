import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../View/Pages/About';
import Contact from '../View/Pages/Contact';
import Resource from '../View/Pages/Resource';
import Home from '../View/Pages/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resource" element={<Resource />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index