import React from "react";
import PropTypes from "prop-types";
import { TabContext } from "./Tab";
import "./Tab.css";

function TabDisplayItem({ forName, children }) {

    const { currentTab } = React.useContext(TabContext);

    return (
        <>
            {currentTab === forName && (
                <>
                    { children }
                </>
            )}
        </>
    );
}

TabDisplayItem.propTyps = {
    forName: PropTypes.string.isRequired
};

export default TabDisplayItem;