import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return(
        <>
            <div className="flex-container">
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">WODs</div>
            </div>
        </>
    )
}

export {Navbar};