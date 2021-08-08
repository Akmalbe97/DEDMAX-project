import React from 'react'
import './style.css'



function Section(){
    return(
        <div className="section" id="home">
           <div className="card">
                <h1>
                    Template Stock
                </h1>
                <p id="text">Let us help you be something Awesome.</p>
                <p id="text2">We Area Here For You.</p>
                <a href="#about" class="btn homebtn smoothScroll">Learn More <i class="far fa-chevron-down"></i> </a>
           </div>
        </div>
    );
}

export default Section;