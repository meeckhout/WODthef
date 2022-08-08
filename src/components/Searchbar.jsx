import React from 'react';
import './Searchbar.css';

function Searchbar() {
    return(
        <div className="search">
            <input type="text" className="searchbar" placeholder="Find your wod"/>
        </div>
    )
}

export default Searchbar;