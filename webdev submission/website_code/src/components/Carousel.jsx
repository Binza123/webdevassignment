import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            
            {data.map((item, idx) => (
                <div key={idx} className={slide === idx ? "slide slide-visible" : "slide slide-hidden"}>
                    <img src={item.src} alt={item.alt} className="carousel-image"/>
                    <div className="caption">{item.caption}</div>
                </div>
            ))}
            
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

            <span className="indicators">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSlide(idx)}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    ></button>
                ))}
            </span>
        </div>
    );
};


