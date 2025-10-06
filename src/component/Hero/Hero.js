import React from "react";
import './Hero.css';
import myImage from './image.jpg';

function Hero(){
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Hi, I'm <span className="name">Nephas Kango</span></h1>
                <h2>Software engineer</h2>
                <p>Software Enginnering professional. </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn secondary-btn">Contact Me</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={myImage} alt="couldnt load" className="image-placeholder"/>
            </div>
        </div>
    );
}

export default Hero;