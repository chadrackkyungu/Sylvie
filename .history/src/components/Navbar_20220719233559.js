import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";

const Example = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <a href="#">Your Logo</a>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul className="navlinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>


        </div>
    );
};

export default Example;
