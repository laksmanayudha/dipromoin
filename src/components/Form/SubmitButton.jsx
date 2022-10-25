import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function SubmitButton({ label }) {

    return <button type="submit" className="form-submit">{ label }</button>
}

SubmitButton.propTypes = {
    label: PropTypes.string.isRequired
}

export default SubmitButton;