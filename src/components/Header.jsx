import React from 'react';
import './Header.css';
import headerImg from '../assets/images/headerImg.png';

function Header() {
    return(
        <div>
          <img src={headerImg} alt="crossfit" className="header" />
        </div>
    )
}

export default Header;