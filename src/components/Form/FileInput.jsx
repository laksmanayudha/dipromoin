import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function FileInput({ 
        onChangeHandler, 
        label, 
        name, 
        id,
        horizontal 
    }){

    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor={id}>{label}</label>}
            <input 
                className="form-input__input" 
                type="file" id={id} name={name}
                onChange={(event) => { onChangeHandler(event.target.files) }} 
            />
        </div>
    );
}

FileInput.propTypes = {
    onChangeHandler: PropTypes.func.isRequired, 
    label: PropTypes.string, 
    name: PropTypes.string, 
    id: PropTypes.string,
    horizontal: PropTypes.bool 
}

export default FileInput;