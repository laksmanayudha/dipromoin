import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../Button";
import { Image } from "../Image";
import "./Carousel.css";

function CarouselItem({ image, title, subtitle, description, onClick }) {

    return (
        <div 
            className="carousel-item" 
        >
            {/* <img className="carousel-item-header" src={image} alt="" /> */}
            <Image url={image} />
            <div className="carousel-item-body">
                <h2 className="carousel-item-body__title">{ title }</h2>
                <small className="carousel-item-body__subtitle">{ subtitle }</small>
                <p className="carousel-item-body__description">{ description }</p>
                <div className="carousel-item-body__action">
                    <ActionButton action={onClick}>See More</ActionButton>
                </div>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CarouselItem;