import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return(
        <>
            <div className="flex-container">
                <img src={logo} alt="wtf logo" className="logo"/>
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">WODs</div>
            </div>
        </>
    )
}

export {Navbar};