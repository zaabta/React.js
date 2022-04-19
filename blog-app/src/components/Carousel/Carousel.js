import React from 'react';
import "./Carousel.css";
import EmblaCarousel from "../../EmblaCarousel/EmblaCarousel";

const Carousel = () => {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className='carousel'>
      <EmblaCarousel className="carousel-items" slides={slides} />
    </div>
  )
}

export default Carousel;