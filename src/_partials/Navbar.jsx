import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
            <div className="flex-container">
                <img src={logo} alt="wtf logo" className="logo"/>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/WODs">WODs</Link>
                </nav>
            </div>
        </>
    )
}

export {Navbar};