import React from "react";
import PropTypes from "prop-types";
import { TabContext } from "./Tab";
import "./Tab.css";

function TabNavs({ children, defaultTab }) {

    const { changeCurrentTab } = React.useContext(TabContext);

    React.useEffect(() => {
        if (defaultTab != undefined) {
            changeCurrentTab(defaultTab);
        }
    }, []);

    return (
        <div className="tab-navs">
            <ul>
                { children }
            </ul>
        </div>
    );
}

TabNavs.propTypes = {
    defaultTab: PropTypes.string
}

export default TabNavs;