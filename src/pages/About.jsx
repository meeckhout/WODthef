import React from 'react';
import { Link } from "react-router-dom";
import '../styles/About.css';
import logo from '../assets/images/logo.png'

function About() {
    return(
            <div className="container">
                <img src={logo} alt="wtf logo" className="wtf"/>

                <nav>
                    <Link to="/" className="item">Home</Link>
                </nav>

                <h3 className="about">
                    Hello and welcome to WOD the f***!
                </h3>
            </div>
    )
}

export {About};