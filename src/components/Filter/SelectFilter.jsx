import React from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi"
import "./Filter.css";

function SelectFilter({ defaultIndexValue, values }) {

    const dropdown = React.useRef(null);
    const [indexValue, setIndexValue] = React.useState(defaultIndexValue || 0);

    const handleOpen = () => {
        dropdown.current.classList.toggle("select-options--open")
    }

    const handleValueChange = (newIndexValue) => {
        dropdown.current.classList.toggle("select-options--open")
        setIndexValue(newIndexValue);

    }
    
    return (
        <div className="select-filter">
            <div className="select-display input" onClick={handleOpen}>
                <span>{ values[indexValue] }</span>
                <FiChevronDown />
            </div>
            <ul className="select-options" ref={dropdown}>
                {values && values.map((value, index) => (
                    <li 
                        className="select-options__item" 
                        key={index}
                        onClick={() => { handleValueChange(index) }}
                    >
                        { value }
                    </li>
                ))}
            </ul>
        </div>
    );
}

SelectFilter.propTypes = {
    defaultIndexValue: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SelectFilter;