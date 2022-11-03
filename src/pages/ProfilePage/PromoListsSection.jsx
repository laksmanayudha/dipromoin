import React from "react";
import PropTypes from "prop-types";
import PromoFormSection from "./PromoFormSection";
import { ActionButton } from "../../components/Button";
import { CardLists } from "../../components/CardLists"
import { Image } from "../../components/Image";
import { FiTrash, FiEdit3, FiEye } from "react-icons/fi";
import { getPromo } from "../../utils/dummy-data";
import { PromoDetail, PromoWrapper } from "../../components/PromoDetail";
import "./ProfilePage.css";

function PromoListsSection({ authedUser, promos, openPopUp, PopUp, isOpen, currentProfile }) {

    const [currentPromoId, setCurrentPromoId] = React.useState(null);
    const [currentPromo, setCurrentPromo] = React.useState(null);
    const [popUpStatus, setPopUpStatus] = React.useState("add"); // add, edit, detail

    const onAddClick = () => {
        setPopUpStatus("add");
        setCurrentPromoId(null);
        openPopUp();
    }

    const onEditClick = (id) => {
        setPopUpStatus("edit");
        setCurrentPromoId(id);
        openPopUp();
    }

    const onDetailClick = (id) => {
        setPopUpStatus("detail");
        setCurrentPromoId(id);
        openPopUp();
    }

    React.useEffect(() => {
        if (!isOpen) {
            setCurrentPromoId(null);
        }
    }, [isOpen]);

    React.useEffect(() => {
        if (currentPromoId != null) {
            const { error, data } = getPromo(currentPromoId);
            if (!error) {
                setCurrentPromo(data);
            }
        }
    }, [currentPromoId]);

    return (
        <>
            <div className="promo-tab">
                {authedUser != null && 
                <>
                    {authedUser.id === currentProfile && (
                        <button className="promo-add" onClick={onAddClick} >
                            <h4>+ Add Promo</h4>
                        </button>
                    )}
                </>}
                <CardLists>
                    {promos.length === 0 && <h4 style={{ color: "var(--grey-1)" }}>Belum Ada Promo</h4>}
                    {promos && promos.map((promo, index) => (
                        <div className="promo-item" key={index} onClick={!authedUser ? () => { onDetailClick(promo.id) } : () => {}}>
                            <Image url={promo.image} />
                            {authedUser != null && 
                            <>
                                {authedUser.id === currentProfile && (
                                    <div className="promo-item__actions">
                                        <ActionButton 
                                            secondary 
                                            small
                                            action={() => { onDetailClick(promo.id) }}
                                        >
                                            <FiEye />
                                        </ActionButton>
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
                                )}
                            </>}

                        </div>
                    ))}
                </CardLists>
            </div>
            {popUpStatus === "add" && PopUp(
                <PromoFormSection 
                    id={null}
                    isOpen={isOpen}  
                />
            )}

            {popUpStatus === "edit" && PopUp(
                <PromoFormSection 
                    id={currentPromoId}
                    isOpen={isOpen}  
                />
            )}

            {(popUpStatus === "detail" && currentPromo) && PopUp(
                <PromoWrapper>
                    <PromoDetail {...currentPromo} />
                </PromoWrapper>
            )}
        </>
    );
}

PromoListsSection.propTypes = {
    promos: PropTypes.arrayOf(PropTypes.object).isRequired, 
    openPopUp: PropTypes.func, 
    PopUp: PropTypes.func, 
    isOpen: PropTypes.bool
}

export default PromoListsSection;