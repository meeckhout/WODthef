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
                    <Link to="/" className="item">Home</Link>
                    <Link to="/about" className="item">About</Link>
                    <Link to="/WODs" className="item">WODs</Link>
                </nav>
            </div>
        </>
    )
}

export {Navbar};