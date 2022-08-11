import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../_partials/Navbar';
import '../styles/About.css';
import logo from '../assets/images/logo.png'

function About() {
    return(
            <div className="container">
                <Navbar />

                <h3 className="about">
                    Hello and welcome to WOD the f***!
                </h3>

            </div>
    )
}

export {About};