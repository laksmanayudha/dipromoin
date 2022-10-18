import React from "react";
import PropTypes from "prop-types";
import "./CardLists.css";

function CardLists({ children, isVertical }) {

    return (
        <div className={"card-lists " + (isVertical ? "card-lists--vertical" : "")}>
            { children }
        </div>
    );
}

CardLists.propTypes = {
    isVertical: PropTypes.bool
};

export default CardLists;