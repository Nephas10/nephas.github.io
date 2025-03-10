import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className="header">
            <div className="logo">Nephas</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;