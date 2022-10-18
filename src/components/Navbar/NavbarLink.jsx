import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

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
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default NavbarLink;