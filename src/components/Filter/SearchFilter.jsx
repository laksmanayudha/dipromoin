import React from "react";
import "./Filter.css";


function SearchFilter() {

    return (
        <form className="search-filter" onSubmit={(event) => event.preventDefault()}>
            <input className="search-filter__input input" type="text" placeholder="Search..." />
        </form>
    );
}

export default SearchFilter