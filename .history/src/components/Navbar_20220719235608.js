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
                    {!isOpen ?
                        (<div id="mainListDiv" class="main_list">
                            <ul className="navlinks">
                                <li><a href="#About">About</a></li>
                                <li><a href="#Who">Who we are </a></li>
                                <li><a href="#Services">Services</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </div>) : null
                    }

                    <span className="navTrigger" onClick={toggle}>
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
