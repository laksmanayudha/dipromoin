import React from "react";
import PropTypes from "prop-types";

function Card({ image, title, subtitle, description, leftHeader }) {

    return (
        <div className={"card " + (leftHeader ? "card--header-left" : "")}>
            <div className="card-header">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h4 className="card-body__title">{title}</h4>
                <small className="card-body__subtitle">{subtitle}</small>
                <p className="card-body__description">{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;