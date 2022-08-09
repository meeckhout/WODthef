import React from 'react';
import './Header.css';
import wtfLogo from '../assets/images/wtfLogo.png';

function Header() {
    return(
        <div>
          <img src={wtfLogo} alt="crossfit" className="header" />
        </div>
    )
}

export default Header;