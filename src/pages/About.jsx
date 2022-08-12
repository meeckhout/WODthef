import React from 'react';
import {Footer, Navbar} from '../_partials';
import about from '../assets/images/about.png';
import '../styles/About.css';

function About() {
    return(
            <div className="container">
                <Navbar />

                <h3 className="about">
                    <span className="avenir">About</span> WOD the f***
                </h3>

                <div className="about-me">
                    <img src={about} alt="" />
                    <span className="text">
                        As a recreational crossfitter, I often find myself without inspiration to start my own work-out.
                        <br />
                        I hear a lot of other people struggle with the same problem so I figured I'd create a website listing a number
                        of easily accessible work-outs specifically for crossfit.
                        <br />
                        No more excuses not to get started!
                    </span>
                </div>

            <Footer />
            </div>
    )
}

export {About};