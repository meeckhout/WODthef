import React from 'react';
import {Navbar} from '../_partials';
import '../styles/About.css';

function About() {
    return(
            <div className="container">
                <Navbar />

                <h3 className="about">
                    <span className="avenir">About</span> WOD the f***
                </h3>

                <div className="about-me">

                </div>

            </div>
    )
}

export {About};