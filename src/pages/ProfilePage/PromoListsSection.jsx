import React from "react";
import PropTypes from "prop-types";
import PromoFormSection from "./PromoFormSection";
import { ActionButton } from "../../components/Button";
import { CardLists } from "../../components/CardLists"
import { Image } from "../../components/Image";
import { FiTrash, FiEdit3 } from "react-icons/fi";
import { getPromo } from "../../utils/dummy-data";
import { PromoDetail, PromoWrapper } from "../../components/PromoDetail";
import "./ProfilePage.css";

function PromoListsSection({ promos, openPopUp, PopUp }) {

    const [currentPromoId, setCurrentPromoId] = React.useState(null);
    const [popUpStatus, setPopUpStatus] = React.useState("add"); // add, edit, detail

    const onAddClick = () => {
        setPopUpStatus("add");
        openPopUp();
    }

    const onEditClick = (id) => {
        setPopUpStatus("edit");
        setCurrentPromoId(id);
        openPopUp();
    }

    return (
        <>
            <div className="promo-tab">
                <button className="promo-add" onClick={onAddClick} >
                    <h4>+ Add Promo</h4>
                </button>
                <CardLists>
                    {promos && promos.map((promo, index) => (
                        <div className="promo-item" key={index} onClick={() => {  }}>
                            <Image url={promo.image} />
                            <div className="promo-item__actions">
                                <ActionButton 
                                    secondary 
                                    small
                                    action={() => { onEditClick(promo.id) }}
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
            {popUpStatus === "add" && PopUp(<PromoFormSection />)}

            {(popUpStatus === "edit" && currentPromoId != null) && PopUp(
                <PromoFormSection id={currentPromoId} />
            )}
        </>
    );
}
export default PromoListsSection;