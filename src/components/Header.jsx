import React from 'react';
import './Header.css';
import wtf from '../assets/images/wtf.png';
import headerAlt from '../assets/images/headerAlt.png';

function Header() {
    return(
        <div>
          <img src={headerAlt} alt="crossfit" className="header" />
            <img src={wtf} alt="text-logo" className="logo" />
        </div>
    )
}

export default Header;