import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.css";

function PageNav({ label, isActive, onPageChange }) {
    
    return (
        <li 
            className={"pagination-nav " + (isActive ? "pagination--active" : "")}
            onClick={onPageChange}
        >
            <Link>{ label }</Link>
        </li>
    );

}

PageNav.propTypes = {
    label: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    onPageChange: PropTypes.func
}

export default PageNav;