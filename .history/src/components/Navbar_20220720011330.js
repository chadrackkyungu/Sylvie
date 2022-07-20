import React, { useState } from "react";
import ParticlesBg from "particles-bg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
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

            <div className="home-content-container d-flex justify-content-center align-content-center">
                <h1>SYLVIE HOLDINGS (PTY) LTD</h1>
            </div>


        </>
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
