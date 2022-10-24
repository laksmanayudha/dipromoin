import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

function ActionButton({ action, children, secondary, small }) {

    if (secondary) {
        return (
            <button 
                onClick={ (event) => {
                    event.stopPropagation();
                    action()
                } } 
                className={"action-button action-button--secondary " + (small ? "action-button--small" : "")}
            >
                {children}
            </button>
        );
    }
    
    return (
        <button 
            onClick={ (event) => {
                event.stopPropagation();
                action()
            } } 
            className={"action-button action-button--primary " + (small ? "action-button--small" : "")}
        >
            {children}
        </button>
    );
}

ActionButton.propTypes = { 
    action: PropTypes.func, 
    secondary: PropTypes.bool, 
    small: PropTypes.bool
}

export default ActionButton;