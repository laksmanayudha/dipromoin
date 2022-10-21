import React from "react";
import PopUp from "../components/PopUp/PopUp";

function withPopUp(Component) {
    return () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const openPopUp = () => { setIsOpen(true); }
        const closePopUp = () => { setIsOpen(false); }
        return (
            <>
                <Component 
                    PopUp={(content) => {
                        return (
                            <PopUp isOpen={isOpen} closePopUp={closePopUp}>
                                {content}
                            </PopUp>
                        );
                    }} 
                    openPopUp={openPopUp}
                    closePopUp={closePopUp}
                />
            </>
        )
    }
}

export default withPopUp;