import React from "react";
import "./Form.css";

function Form({ children , onSubmitHandler}) {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            { children }
        </form>
    );
}

export default Form;