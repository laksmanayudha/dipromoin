import React from "react";
// import PropTypes from "prop-types";

function SeeMoreButton({ action }) {
    
    return (
        <div className="carousel-item-body__action">
            <button onClick={ action } className="see-more">See more</button>
        </div>
    );
}

export default SeeMoreButton;