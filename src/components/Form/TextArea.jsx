import React from "react";
import PropTypes from "prop-types";

function TextArea({ label, horizontal, placeholder, value, onInputHandler }) {

    const [input] = React.useState(value);

    return (
        <div className={"textarea form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor="name">{label}</label>}
            <div 
                className="text-area-input form-input__input" 
                contentEditable 
                data-placeholder={placeholder} 
                suppressContentEditableWarning
                onInput={(event) => { onInputHandler(event.target.innerHTML) }}
            >
                {input}
            </div>
        </div>
    );
}

TextArea.propTypes = {

}

export default TextArea;