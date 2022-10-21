import React from "react";
import PropTypes from "prop-types";
import { BiX } from "react-icons/bi";
import "./PopUp.css";

function PopUp({ children, isOpen, closePopUp }) {

    return (
        <div className={"pop-up " +  (isOpen ? "" : "pop-up--close" )}>
            <div className="pop-up-wrapper">
                <span className="pop-up-close" onClick={closePopUp}> <BiX /> </span>
                <div className="pop-up-container">
                    { children }
                </div>
            </div>
        </div>
    );
}

PopUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closePopUp: PropTypes.func.isRequired
}

export default PopUp;