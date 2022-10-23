import React from "react";
import "./Tab.css";

export const TabContext = React.createContext();

function Tab({ children }) {

    const [currentTab, setCurrentTab] = React.useState(null);
    const changeCurrentTab = (value) => { setCurrentTab(value); }
    const tabValue = { currentTab, changeCurrentTab }

    return (
        <TabContext.Provider value={ tabValue }>
            <div className="tab">
                { children }
            </div>
        </TabContext.Provider>
    );
}

export default Tab;