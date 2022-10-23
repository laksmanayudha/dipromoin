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
                    // "render props" technique
                    PopUp={(content) => {
                        return (
                            <PopUp isOpen={isOpen} closePopUp={closePopUp}>
                                {content}
                            </PopUp>
                        );
                    }} 
                    // this below also works, but need to pass isOpen nad closePopUp props to Component
                    // this also can be used to pass a Component as props
                    // PopUp={PopUp}
                    openPopUp={openPopUp}
                    closePopUp={closePopUp}
                />
            </>
        )
    }
}

export default withPopUp;