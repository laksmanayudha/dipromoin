import React from "react";
import PropTypes from "prop-types";

function TextArea({ label, horizontal, placeholder, value, onInputHandler }) {

    const [input, setInput] = React.useState(value);

    React.useEffect(() => {
        if (!input) {
            setInput(value);
        }
    }, [value]);

    return (
        <div className={"textarea form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor="name">{label}</label>}
            <div 
                className="text-area-input form-input__input" 
                contentEditable 
                data-placeholder={placeholder} 
                suppressContentEditableWarning
                onInput={(event) => { 
                    onInputHandler(event.target.innerHTML) }
                }
            >
                {input}
            </div>
        </div>
    );
}

TextArea.propTypes = {
    label: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    onInputHandler: PropTypes.func.isRequired,
    horizontal: PropTypes.bool, 
    placeholder: PropTypes.string, 
}

export default TextArea;