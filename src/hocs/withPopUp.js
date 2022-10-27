import React from "react";
import PopUp from "../components/PopUp/PopUp";

function withPopUp(Component) {
    return (props) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [callbacks, setCallbacks] = React.useState([]);
        const openPopUp = () => { setIsOpen(true); }
        const closePopUp = () => { 
            callbacks.forEach(callback => {
                callback();
            });
            setIsOpen(false); 
        }
        const onClosePopUp = (callback) => { 
            setCallbacks((prevCallback) => ([...prevCallback, callback]));
         }
        return (
            <>
                <Component 
                    {...props}
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
                    onClosePopUp={onClosePopUp}
                    isOpen={isOpen}
                />
            </>
        )
    }
}

export default withPopUp;