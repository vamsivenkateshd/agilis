import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {checkCookie } from '../../Utils/utils'




const Carousel = ({
  items ,
  autoplayInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef();

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };
  useEffect(()=>{
    checkCookie()
  },[])
  
 

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        setActiveIndex((activeIndex + 1) % items.length);
      }, autoplayInterval);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [activeIndex, autoplay, autoplayInterval, items.length]);


  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
     
    >
      <button className="carousel-prev" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
        >
          <img src={item.image} alt="Something went wrong"/>
        </div>
      ))}
      <button className="carousel-next" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
      <div className="carousel-indicators">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};




export default Carousel;
