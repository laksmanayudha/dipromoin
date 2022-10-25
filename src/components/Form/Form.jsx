import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form({ children, onBackground, horizontal, onSubmitHandler}) {

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitHandler();
    }

    return (
        <form 
            className={
                "form " + 
                (onBackground ? "form--on-background " : "") +
                (horizontal ? "form--horizontal " : "")
            } 
            onSubmit={submitHandler}
        >
            { children }
        </form>
    );
}

Form.propTypes = {
    onSubmitHandler: PropTypes.func
}

export default Form;