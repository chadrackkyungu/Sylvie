import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log("hey");
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="logo"> <a href="/">Sylvie</a> </div>

                    <div id="mainListDiv" className={`main_list ${!isOpen ? "show_list" : " "}`} style={{ display: isOpen ? "block" : "none" }}>
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

            <section className="home">

            </section>

        </div>
    );
};

export default Navbar;
