import React from "react";
import "./Form.css";

function SubmitButton({ label }) {

    return <button type="submit" className="form-submit">{ label }</button>
}

export default SubmitButton;