import React from "react";
import PropTypes from "prop-types";
import "./Form.css";
import { Image } from "../Image";

function FileInput({ 
        onChangeHandler,
        value, 
        label, 
        name, 
        id,
        horizontal,
        errorMessage 
    }){
    
    const changeFile = (event) => {
        const fileURl = URL.createObjectURL(event.target.files[0]);

        // this will change the value props, look for the useInput custom hooks
        onChangeHandler(fileURl);
    }

    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor={id}>{label}</label>}
            <div className="form-input__container">
                <div className="form-input__input file">
                    <label htmlFor={id} className={value ? "file--height" : ""}>
                        {value
                        ? <Image url={value} />
                        : "Pilih Foto"
                        }
                    </label>
                    <input 
                        className=""
                        accept="image/*" 
                        type="file" id={id} name={name}
                        onChange={ changeFile } 
                    />
                </div>
                <small className="form-input__error">{errorMessage}</small>
            </div>
        </div>
    );
}

FileInput.propTypes = {
    onChangeHandler: PropTypes.func.isRequired, 
    label: PropTypes.string, 
    name: PropTypes.string, 
    id: PropTypes.string.isRequired,
    horizontal: PropTypes.bool 
}

export default FileInput;