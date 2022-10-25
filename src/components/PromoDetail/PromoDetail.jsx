import React from "react";
import { Image } from "../Image";
import { Link } from "react-router-dom";
import { GoToButton } from "../Button";
import PropTypes from "prop-types";
import "./PromoDetail.css"

function PromoDetail({ 
        image, 
        title, 
        umkm,
        city, 
        address,  
        description, 
        link,
        from,
        to, 
        phone,
    }){

    return (
        <div className="promo-detail">
            <header className="promo-detail-header">
                <div className="promo-detail-header__image">
                    <Image url={image} />
                </div>
                <div className="promo-detail-header__actions">
                    <GoToButton label="Website" url={link} />
                    <GoToButton label="WhatsApp" url={phone} />
                </div>
            </header>
            <div className="promo-detail-body">
                <h3 className="promo-detail-body__title"><Link to={""}>{title}</Link></h3>
                <small className="promo-detail-body__umkm"><Link to={""}>{umkm}</Link></small> <br />
                <small className="promo-detail-body__address">{city} - {address}</small> <br />
                <small className="promo-detail-body__time">{from} - {to}</small> <br />
                <div className="promo-detail-body__description">
                {description}
                </div>
            </div>
        </div>
    );
}

PromoDetail.propTypes = { 
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    umkm: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired, 
    address: PropTypes.string.isRequired, 
    time: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
}

export default PromoDetail;