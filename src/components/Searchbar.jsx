import React from 'react';
import './Searchbar.css';
import { FaSearch } from "react-icons/fa";

function Searchbar() {
    return(
        <div className="search">
            <input type="text" placeholder="Find your wod" className="searchbar" />
            <button><FaSearch className="FaSearch"/></button>
        </div>
    )
}

export default Searchbar;