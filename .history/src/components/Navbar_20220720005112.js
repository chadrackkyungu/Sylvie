import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Home from './../pages/home'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <div className="home-bg h-100">

                <nav className="nav">
                    <div className="container">
                        <div className="logo"> <a href="/">Sylvie</a> </div>

                        <div id="mainListDiv" className={`main_list ${!isOpen ? "show_list" : " "}`} style={{ display: !isOpen ? "block" : "" }}>
                            <ul className="navlinks">
                                <li><a href="#About">About</a></li>
                                <li><a href="#Who">Who we are </a></li>
                                <li><a href="#Services">Services</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </div>

                        <span className={`navTrigger ${!isOpen ? "active" : " "}`} onClick={toggle}>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>

                    </div>
                </nav>
                {/* <section className="bg-animation-container"> */}
                {/* <section className="home"> */}
                <ParticlesBg type="polygon" bg={true} />
                {/* </section> */}
            </div>
        </div>
    );
};

export default Navbar;

// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"
