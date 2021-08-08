import React from 'react'
import './style.css'




function Header(){
    return(
        <nav>
            <h1><a href="#">Solitude</a></h1>
            <ul className="nav-item">
                <li><a className="nav-link" href="#">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#images">Services</a></li>
                <li><a className="nav-link" href="#team">Team</a></li>
                <li><a className="nav-link" href="#grow">Blog</a></li>
                <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <a href="#" id="bars"><i class="fas fa-bars"></i></a>
        </nav>
    );
}

export default Header;