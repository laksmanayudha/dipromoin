import React from "react";
// import PropTypes from "prop-types";

function SeeMoreButton({ action }) {
    
    return (
        <button onClick={ action } className="see-more">See more</button>
    );
}

export default SeeMoreButton;