import React from "react";
import "./PromoDetail.css"

function PromoWrapper({ children }) {

    return (
        <div className="promo-wrapper">
            { children }
        </div>
    );
}

export default PromoWrapper;