import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../View/Pages/About';
import Contact from '../View/Pages/Contact';
import Resource from '../View/Pages/Resource';
import Home from '../View/Pages/Home';


const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resource" element={<Resource />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index