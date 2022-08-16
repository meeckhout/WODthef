import React from 'react';
import {Footer, Navbar} from '../_partials';
import about from '../assets/images/about.png';
import wtf from '../assets/images/wtf.png';
import '../styles/About.css';

function About() {
    return(
            <div className="container">
                <Navbar />

                <h3 className="about">
                    <span className="avenir">About</span>
                    <img src={wtf} alt="logo" className="wtflogo" />
                </h3>

                <div className="about-me">
                    <img src={about} alt="" />
                    <span className="text">
                        <span className="para1">As a recreational crossfitter, I often find myself without inspiration to start my own work-out.</span>
                        <br />
                       <span className="para2">I hear a lot of other people struggle with the same problem so I figured I'd create a website listing a number
                        of easily accessible work-outs specifically for crossfit.</span>
                        <br />
                        <span className="para3">No more excuses not to get started!</span>
                        <br />
                        <button className="contact">Contact Me</button>
                    </span>
                </div>

            <Footer />
            </div>
    )
}

export {About};