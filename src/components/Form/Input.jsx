import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Input({ 
        onChangeHandler, 
        label, 
        type, 
        value, 
        placeholder, 
        name, 
        id,
        min,
        disabled,
        horizontal 
    }){

    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor={id}>{label}</label>}
            <input 
                className="form-input__input" 
                type={type} id={id} name={name}
                onChange={(event) => { onChangeHandler(event.target.value) }} 
                value={value} 
                min={min}
                placeholder={placeholder}
                disabled={disabled ? true : false}
            />
        </div>
    );
}

Input.propTypes = {
    onChangeHandler: PropTypes.func.isRequired, 
    label: PropTypes.string, 
    type: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    placeholder: PropTypes.string, 
    name: PropTypes.string, 
    id: PropTypes.string,
    horizontal: PropTypes.bool 
}

export default Input;