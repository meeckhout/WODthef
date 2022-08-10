import React from 'react';
import '../styles/Footer.css'

function Footer() {
    const Today = new Date();

    return(
        <div className="footer">
            <span>
               ©{Today.getFullYear()} Marthe Eeckhout
            </span>
        </div>
    )
}

export {Footer};