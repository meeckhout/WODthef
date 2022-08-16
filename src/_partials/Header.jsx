import React from 'react';
import '../styles/Header.css';
import header from '../assets/images/header.png';


function Header() {
    return(
        <div>
          <img src={header} alt="crossfit" className="header" />
        </div>
    )
}

export {Header};