import React from 'react'
import './style.css'
import './script'


function About(){
    return(
        <div className="container" id="abo">
            <div className="little2">
                <div className="sarlavha"><h1>A LITTLE ABOUT US</h1></div>
                <div className="text">
                    <p>O'zbekiston Respublikasi Xorazm Viloyati O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm Viloyti O'zbekiston</p>
                    <p>O'zbekiston Respublikasi Xorazm Viloyati O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm ViloyTI O'zbekiston Respublikasi Xorazm Viloyti O'zbekiston</p>
                </div>
            </div>

            <div className="container" id="images">
                <div className="sarlavha"><h1 id="sarlavha">HERE IS THE PROOF</h1></div>
                <div className="sonlar">
                    <div className="col-md-3">
                        <span className="counter" id="number">100</span>
                        <span className="counter-desc">Percent Focus</span>
                    </div>
                    <div className="col-md-3">
                        <span className="counter">1000</span>
                        <span className="counter-desc">MINIMUM SAVING</span>
                    </div>
                    <div className="col-md-3">
                        <span className="counter">10000</span>
                        <span className="counter-desc">IDEAS</span>
                    </div>
                    <div className="col-md-3">
                        <span className="counter">100000</span>
                        <span className="counter-desc">PROFIT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About