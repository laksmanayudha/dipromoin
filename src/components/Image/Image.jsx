import React from "react";
import PropTypes from "prop-types";
import "./Image.css"
import { getRandomColors } from "../../utils/randomColors";

function Image({ url }) {

    const color = getRandomColors(1)[0]
    
    return (
        <div className="image-wrapper" style={{ backgroundColor: color }}>
            <img className="image" src={url} alt="" />
        </div>
    );
}

Image.propTypes = {
    url: PropTypes.string.isRequired
};

export default Image;