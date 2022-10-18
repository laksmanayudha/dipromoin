import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ children }) {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="navbar">
            <div className="navbar-header">
                <h1 className="navbar-header__logo">Dipromoin.id</h1>
                <button className="navbar-header__toggle" onClick={() => setIsOpen(!isOpen)}> <FiMenu /> </button>
            </div>
            <nav className="navbar-body">
                <ul className={"navbar-body__menu " + (isOpen ? "navbar-body--open" : "")}>
                    { children }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;