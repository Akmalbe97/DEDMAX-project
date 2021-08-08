import React from 'react'
import './style.css'

function Footer() {
    return(
        <footer>
            <div className="select-btn">
                <a href="#"><i class="fas fa-chevron-up"></i></a>
            </div>
            <ul className="social">
                <li><a href="https://t.me/akmal_8882"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://facebook.com"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://google.com"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="https://flickr.com"><i class="fab fa-flickr"></i></a></li>
                <li><a href="https://youtube.com"><i class="fab fa-youtube"></i></a></li>
                <li><a href="https://youtube.com"><i class="fas fa-wifi"></i></a></li>
            </ul>
            <h3>Created by <span id="copyright">Ollaberganov Akmal</span> - Copyright 2021</h3>
        </footer>
    );
}


export default Footer