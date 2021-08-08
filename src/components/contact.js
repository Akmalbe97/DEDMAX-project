import React from 'react';
import './style.css'

function Contact() {
    return(
        <div className="contact" id="contact">
            <div className="us">
                <div className="sarlavha"><h1>THANKS FOR VISITING US</h1></div>
                <div className="divlar">
                    <div>
                        <h2>Contact information</h2>
                        <p id="time">
                            <span><i class="fas fa-times-octagon"></i></span>
                            Time Square,Uzbekistan
                            <br></br>
                            <span><i class="fas fa-phone-square-alt"></i></span>
                            +12 12345 123
                            <br></br>
                            <span><i class="fas fa-phone-square-alt"></i></span>
                            +12 12345 123
                            <br></br>
                            <span><i class="far fa-envelope"></i></span>
                            <a href="https://mail.google.com/mail/u/0/#inbox">akmalbek705@gmail.com </a> 
                            <br></br>
                            <span><i class="fab fa-telegram"></i></span>
                            <a href="https://t.me/Akmal_8882">@akmal_8882</a>
                            <br></br>
                            <span><i class="fab fa-facebook"></i></span>
                            <a href="">@React</a>
                        </p>
                        
                    </div>
                    <div>
                        <h2>NewsLetter</h2>
                        <p>Register to our newsletter and be updated with the latests information regarding our services, offers and much more.</p>
                        <input type="email" placeholder="Email" className="form-control" id="input"></input>
                        <input placeholder="Your Name" className="form-control"></input>
                        <a href="#" id="sign">SIGN IN</a>
                    </div>
                    <div>
                        <h2>Support Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact