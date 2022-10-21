import React from "react";
import { setActionOnWindowScroll } from "../../utils/onWindowScroll";
import "./Filter.css";

function FilterContainer({ children }) {

    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(() => {
        setActionOnWindowScroll((scrollTop) => {
            if (scrollTop > 80) {
                setIsFixed(true);
            }else{
                setIsFixed(false);
            }
        })
    }, []);

    return (
        <div className={"filter-container " + (isFixed ? "filter-container--sticky" : "")}>
            { children }
        </div>
    );
}

export default FilterContainer