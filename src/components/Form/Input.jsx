import React from "react";
import "./Form.css";

function Input({ 
        onChangeHandler, 
        label, 
        type, 
        value, 
        placeholder, 
        name, 
        id,
        horizontal 
    }){

    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            <label className="form-input__label" htmlFor="name">{label}</label>
            <input 
                className="form-input__input" 
                type={type} id={id} name={name}
                onChange={onChangeHandler} 
                value={value} 
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;