import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return(
        <div className='nav-wrapper'>
            <h1>Title</h1>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>WODs</li>
            </ul>
        </div>
    )
}

export {Navbar};