import React from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi"
import "./Form.css";
import { setActionOnDocumentClick } from "../../utils/onDocumentClick";

function Select({ defaultIndexValue, values, label, horizontal }) {

    const dropdown = React.useRef(null);
    const displayInput = React.useRef(null);
    const [indexValue, setIndexValue] = React.useState(defaultIndexValue || 0);

    const handleToggle = () => {
        dropdown.current.classList.toggle("select-options--open")
    }

    const handleClickOutside = () => {

        // if not rendered in document, refs "current" is filled with null
        if (dropdown.current != null) {
            dropdown.current.classList.remove("select-options--open");
        }
    }

    const handleValueChange = (newIndexValue) => {
        dropdown.current.classList.toggle("select-options--open")
        setIndexValue(newIndexValue);

    }

    React.useEffect(() => {
        setActionOnDocumentClick((clickedElement) => {
            
            // if not rendered in document, refs "current" is filled with null
            // console.log(displayInput.current);
            // console.log(dropdown.current);
            if (clickedElement !== displayInput.current) {
                handleClickOutside();
            }
        })
    }, []);
    
    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label htmlFor="" className="form-input__label">{label}</label>}
            <div className="select form-input__input">
                <div className="select-display" onClick={handleToggle} ref={displayInput}>
                    <span>{values && values[indexValue] }</span>
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
        </div>
    );
}

Select.propTypes = {
    defaultIndexValue: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Select;