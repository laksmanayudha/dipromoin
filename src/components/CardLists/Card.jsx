import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import { getRandomColors } from "../../utils/randomColors";

function Card({ image, title, subtitle, description, leftHeader, action, to }) {

    const color = getRandomColors(1)[0];

    return (
        <div className={"card " + (leftHeader ? "card--header-left" : "")} onClick={action}>
            <div className="card-header" style={{ backgroundColor: color }}>
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h4 className="card-body__title"><Link to={to}>{title}</Link></h4>
                <small className="card-body__subtitle">{subtitle}</small>
                <p className="card-body__description">{parser(description)}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    leftHeader: PropTypes.bool,
    action: PropTypes.func,
    to: PropTypes.string,
};

export default Card;