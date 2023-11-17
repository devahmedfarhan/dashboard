import React from 'react';
import './header.css';
import Logo from '../../Assets/logo.svg'
import LangIcon from '../../Assets/global-svgrepo-com.svg'
import Arrow from '../../Assets/arrow-down-338-svgrepo-com.svg'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <>
            <div className="container mainheader">
                <div className="header-logo">
                    <img className='logo' src={Logo} alt="#" />
                    <div className="nav-menu">
                        <ul>
                            <li><Link to="#">Jobs</Link></li>
                            <li><Link to="/About">Industries & Solutions</Link></li>
                            <li><Link to="/Contact">About Us</Link></li>
                            <li><Link to="/Resource">Resources</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="headerButtonsGroup">
                    <button type="button" className="signUp">Register</button>
                    <button type="button" className="saleEnq">Sales Enquiry</button>
                    <div class="dropdown">
                        <button class="dropbtn"> <img className='Langicon' src={LangIcon} alt="#" /> EN <img className='Arrow' src={Arrow} alt="#" /></button>
                        <div class="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">Hindi</a>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Header