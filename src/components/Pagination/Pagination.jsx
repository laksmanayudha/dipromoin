import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

function Pagination({ children }) {
    
    return (
        <nav className="pagination">
            <ul className="pagination-lists">
                <li className="pagination-nav pagination--prev"><Link to="/"> {"<"} </Link></li>
                { children }
                <li className="pagination-nav pagination--next"><Link to="/"> {">"} </Link></li>
            </ul>
        </nav>
    );
}

export default Pagination;