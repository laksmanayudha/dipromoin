import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../../components/Button";
import { CardLists } from "../../components/CardLists"
import { Image } from "../../components/Image";
import { FiTrash, FiEdit3 } from "react-icons/fi";
import "./ProfilePage.css";

function PromoListsSection({ promos, openPopUp }) {
    return (
        <div className="promo-tab">
            <button className="promo-add" onClick={() => { openPopUp(); }} >
                <h4>+ Add Promo</h4>
            </button>
            <CardLists>
                {promos && promos.map((promo, index) => (
                    <div className="promo-item" key={index}>
                        <Image url={promo.image} />
                        <div className="promo-item__actions">
                            <ActionButton 
                                secondary 
                                small
                                action={openPopUp}
                            >
                                <FiEdit3 />
                            </ActionButton>
                            <ActionButton 
                                small
                            >
                                <FiTrash />
                            </ActionButton>
                        </div>
                    </div>
                ))}
            </CardLists>
        </div>
    );
}
export default PromoListsSection;