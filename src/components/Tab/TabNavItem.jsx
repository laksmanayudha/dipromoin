import React from "react";
import PropTypes from "prop-types";
import { TabContext } from "./Tab";
import "./Tab.css";

function TabNavItem({ name, children }) {

    const { currentTab, changeCurrentTab } = React.useContext(TabContext);

    return (
        <li 
            className={"tab-navs__item " + (name === currentTab ? "tab-navs--active" : "")} 
            onClick={() => changeCurrentTab(name)}
        >
            <h4>
                {children}
            </h4>
        </li>
    );
}

TabNavItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default TabNavItem;