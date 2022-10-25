import React from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi"
import "./Form.css";
import { setActionOnDocumentClick } from "../../utils/onDocumentClick";

const findIndex = (values, key) => {
    const index =  values.findIndex(value => value.key === key);
    if (index === -1) {
        return 0;
    }
    return index;
}

function Select({ defaultKeyValue, values, label, horizontal, onChangeHandler }) {

    const dropdown = React.useRef(null);
    const displayInput = React.useRef(null);
    // const [indexValue, setIndexValue] = React.useState(findIndex(values, defaultKeyValue));
    const indexValue = findIndex(values, defaultKeyValue);

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
        // setIndexValue(newIndexValue);
        onChangeHandler(newIndexValue);
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
                    <span>{values && values[indexValue].value }</span>
                    <FiChevronDown />
                </div>
                <ul className="select-options" ref={dropdown}>
                    {values && values.map((value, index) => (
                        <li 
                            className="select-options__item" 
                            key={index}
                            onClick={() => { handleValueChange(value.key) }}
                        >
                            { value.value }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Select.propTypes = {
    defaultKeyValue: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    label: PropTypes.string,
    horizontal: PropTypes.bool, 
}

export default Select;