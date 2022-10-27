import React from "react";
import PropTypes from "prop-types";

function TextArea({ 
        label, 
        horizontal, 
        placeholder, 
        value, 
        onInputHandler, 
        isReset,
        errorMessage
    }) {

    const textArea = React.useRef();

    React.useEffect(() => {
        if (!textArea.current.innerHTML) {
            textArea.current.innerHTML = value;
        }
    }, [value])

    React.useEffect(() => {
        if (isReset) {
            textArea.current.innerHTML = "";
        }else {
            textArea.current.innerHTML = value;
        }
    }, [isReset])

    return (
        <div className={"textarea form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor="name">{label}</label>}
            <div className="form-input__container">
                <div 
                    ref={textArea}
                    className="text-area-input form-input__input" 
                    contentEditable 
                    data-placeholder={placeholder} 
                    suppressContentEditableWarning
                    onInput={(event) => { 
                            onInputHandler(event.target.innerHTML) 
                        }
                    }
                />
                <small className="form-input__error">{errorMessage}</small>
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