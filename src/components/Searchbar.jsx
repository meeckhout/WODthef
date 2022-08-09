import React from 'react';
import './Searchbar.css';
import { FaSearch } from "react-icons/fa";

function Searchbar() {
    return(
        <div className="findWod">
            <div className="search">
                <input type="text" placeholder="Find your wod" className="searchbar" />
                <FaSearch className="FaSearch"/>
            </div>
        </div>
    )
}

export {Searchbar};