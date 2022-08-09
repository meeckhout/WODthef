import React from 'react';
import './Header.css';
import wtfLogov2 from '../assets/images/wtfLogov2.png';


function Header() {
    return(
        <div>
          <img src={wtfLogov2} alt="crossfit" className="header" />
        </div>
    )
}

export {Header};