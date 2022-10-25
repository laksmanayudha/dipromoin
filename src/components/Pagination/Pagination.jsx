import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

function Pagination({ children, nextPage, prevPage }) {
    
    return (
        <nav className="pagination">
            <ul className="pagination-lists">
                <li className="pagination-nav pagination--prev" onClick={prevPage}><Link> {"<"} </Link></li>
                { children }
                <li className="pagination-nav pagination--next" onClick={nextPage}><Link> {">"} </Link></li>
            </ul>
        </nav>
    );
}

export default Pagination;