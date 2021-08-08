import React from 'react';
import './style.css';

function Portfolio() {
    return (
        <section  className="portfolio" id="portfolio">
            <div className="sarlavha"><h1>SOME OF WHAT WE HAVE DONE</h1></div>
            <div className="portfolios">
                <figure className="figu" id="figu">
                    <img src="https://picsum.photos/455/300"></img>
                    <figcaption>
                        <span>PROJECT ONE</span>
                        <a href="https://akmal27.netlify.app"><i class="far fa-link"></i></a>
                    </figcaption>
                </figure>
                <figure className="figu" id="figu">
                    <img src="https://source.unsplash.com/random/455x300"></img>
                    <figcaption>
                        <span>PROJECT TWO</span>
                        <a href="https://akmal27.netlify.app"><i class="far fa-link"></i></a>
                    </figcaption>
                </figure>
                <figure className="figu" id="figu">
                    <img src="https://picsum.photos/455/300"></img>
                    <figcaption>
                        <span>PROJECT THREE</span>
                        <a href="https://akmal27.netlify.app"><i class="far fa-link"></i></a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Portfolio