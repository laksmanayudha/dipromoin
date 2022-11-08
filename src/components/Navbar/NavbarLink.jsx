import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function NavbarLink({ label, href }) {

    const location = useLocation();
    const pathname = location.pathname;

    return (
        <li className={"navbar-body__nav " + (pathname === href ? "navbar-body--active": "")}>
            <h4>
                <Link to={href}>{ label }</Link>
            </h4>
        </li>
    );
}

NavbarLink.propTypes = {
    label: PropTypes.any,
    href: PropTypes.string
};

export default NavbarLink;