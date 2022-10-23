import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function GoToButton({ label, url }) {

    return (
        <a className="goto-button" href={url} target="_blank" rel="noreferrer">{label}</a>
    );
}

GoToButton.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GoToButton;