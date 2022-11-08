import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { Image } from "../Image";
import { Link } from "react-router-dom";
import { GoToButton } from "../Button";
import { getTime, getCity, getUMKM } from "../../utils/dummy-data";
import { routes } from "../../pages";
import "./PromoDetail.css"

function PromoDetail({ 
        id,
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
                    <GoToButton label="WhatsApp" url={"https://wa.me/" + phone} />
                </div>
            </header>
            <div className="promo-detail-body">
                <h3 className="promo-detail-body__title"><Link to={routes("promoDetail", id)}>{title}</Link></h3>
                <small className="promo-detail-body__umkm"><Link to={routes("profile", umkm)}>{getUMKM(umkm).data.name}</Link></small> <br />
                <small className="promo-detail-body__address">{getCity(city)} - {address}</small> <br />
                <small className="promo-detail-body__time">{getTime(from)} - {getTime(to)}</small> <br />
                <div className="promo-detail-body__description">
                    {parser(description)}
                </div>
            </div>
        </div>
    );
}

PromoDetail.propTypes = { 
    id: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    umkm: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired, 
    address: PropTypes.string.isRequired,  
    description: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    from: PropTypes.string.isRequired, 
    to: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
}

export default PromoDetail;