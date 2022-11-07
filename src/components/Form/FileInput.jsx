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
        errorMessage,
        maxSize 
    }){

    const [error, setError] = React.useState("")
    
    const imageDisplay = React.useRef();
    const changeFile = (event) => {
        // calculate the maximum file size
        maxSize = maxSize ? parseInt(maxSize) : 2;
        maxSize = maxSize * 1024 * 1024

        // check uploaded file size
        if (event.target.files[0].size < maxSize) {
            setError("")
            // const fileURl = URL.createObjectURL(event.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", e => {

                // this will change the value props that change the url Image component
                // see the useInput custom hooks
                onChangeHandler(e.target.result);
            });
            reader.readAsDataURL(event.target.files[0]);
        }else {
            setError("File size exceed the allowed maximum size.");
        }
    }

    React.useEffect(() => {
        setError(errorMessage);
    }, [errorMessage])

    return (
        <div className={"form-input " + (horizontal ? "form-input--horizontal" : "")}>
            {label && <label className="form-input__label" htmlFor={id}>{label}</label>}
            <div className="form-input__container">
                <div className="form-input__input file">
                    <label htmlFor={id} className={value ? "file--height" : ""}>
                        {value
                        ? <Image url={value} reference={imageDisplay}/>
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
                <small className="form-input__error">{error}</small>
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