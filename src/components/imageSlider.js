import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].image})`,
    };
    const arrowStyles = {
        position: "absolute",
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    };
    const leftArrow = {
        ...arrowStyles,
        left: '32px',
    };
    const rightArrow = {
        ...arrowStyles,
        right: '32px',
    };

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div style={sliderStyles}>
            <div style={leftArrow} onClick={goPrev}>
                <FaArrowLeft />
            </div>
            <div style={rightArrow} onClick={goNext}>
                <FaArrowRight />
            </div>
            <div style={slideStyles}></div>
        </div>
    );
};

export default ImageSlider;
