import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.css";

function PageNav({ href, label, isActive }) {
    
    return <li className={"pagination-nav " + (isActive ? "pagination--active" : "")}><Link to={href}>{ label }</Link></li>;
}

PageNav.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
}

export default PageNav;