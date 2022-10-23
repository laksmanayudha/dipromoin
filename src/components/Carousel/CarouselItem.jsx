import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../Button";
import { Image } from "../Image";

function CarouselItem({ image, title, address, description }) {

    return (
        <div 
            className="carousel-item" 
        >
            {/* <img className="carousel-item-header" src={image} alt="" /> */}
            <Image url={image} />
            <div className="carousel-item-body">
                <h2 className="carousel-item-body__title">{ title }</h2>
                <small className="carousel-item-body__address">{ address }</small>
                <p className="carousel-item-body__description">{ description }</p>
                <div className="carousel-item-body__action">
                    <ActionButton>See More</ActionButton>
                </div>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CarouselItem;