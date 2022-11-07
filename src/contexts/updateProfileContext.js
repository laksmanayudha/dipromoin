import React from "react";

export const UpdateProfileContext = React.createContext();

function UpdateProfileProvider({ children }) {

    const [isProfileUpdate, setIsProfileUpdate] = React.useState(false);
    const UpdateProfileValue = React.useMemo(() => ({ isProfileUpdate, setIsProfileUpdate }));

    return (
        <>
            <UpdateProfileContext.Provider value={UpdateProfileValue}>
                {children}
            </UpdateProfileContext.Provider>
        </>
    )
}

export default UpdateProfileProvider;