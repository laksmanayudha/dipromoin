import React from "react";
import "./Filter.css";

function FilterContainer({ children }) {

    const [isFixed, setIsFixed] = React.useState(false);

    return (
        <div className={"filter-container " + (isFixed ? "filter-container--sticky" : "")}>
            { children }
        </div>
    );
}

export default FilterContainer