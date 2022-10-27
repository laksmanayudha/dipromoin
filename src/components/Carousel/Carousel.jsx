import React from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import { getRandomColors } from "../../utils/randomColors";
import "./Carousel.css";

function Carousel({ items, onClick }) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [isFade, setIsFade] = React.useState(false);
    const [backgroundColors, setBackgroundColors] = React.useState(['']);

    const changeIndexHandler = (value) => {
        if (value > items.length - 1) {
            setSelectedIndex(0);
        }else{
            setSelectedIndex(value);
        }
        setIsFade(() => true);
    } 

    React.useEffect(() => {
        setBackgroundColors(getRandomColors(items.length));
    }, [])

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            changeIndexHandler(selectedIndex + 1);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }

        // put prop items as dependency, 
        // if not, the function will not update the first items props value (still hold the old value) which is empty array
        // and it's make the the selected index still zero
    }, [selectedIndex, items]); 

    if(items.length === 0) {
        return null;
    }

    return (
        <div 
            className={"carousel " + (isFade ? "fading" : "")}
            onAnimationEnd={() => setIsFade(false)}
            onClick={() => changeIndexHandler(selectedIndex + 1)}
        >
            <CarouselItem 
                image={items[selectedIndex].image}
                title={items[selectedIndex].title}
                subtitle={items[selectedIndex].subtitle}
                description={items[selectedIndex].description}
                bgColor={backgroundColors[selectedIndex]}
                onClick={onClick}
            />

            <div className="carousel-pagination" >
                {items && items.map((item, index) => (
                    <input 
                        className="carousel-pagination-item" 
                        type="radio" 
                        name="carousel" 
                        value={index} 
                        key={index} 
                        onChange={() => changeIndexHandler(index)}
                        checked={selectedIndex === index}
                    />
                ))}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;