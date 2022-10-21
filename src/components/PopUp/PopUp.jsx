import React from "react";
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

export default PopUp;