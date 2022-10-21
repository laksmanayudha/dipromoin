import React from "react";
import PropTypes from "prop-types";
import { getRandomColors } from "../../utils/randomColors";

function Card({ image, title, subtitle, description, leftHeader, action }) {

    const color = getRandomColors(1)[0];

    return (
        <div className={"card " + (leftHeader ? "card--header-left" : "")} onClick={action}>
            <div className="card-header" style={{ backgroundColor: color }}>
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