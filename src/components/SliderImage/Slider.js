import React, { useState } from 'react'
import SliderImage from './sliderImage'
import Arrows from './Arrows'
import Dots from './Dots'
import SliderContent from './SliderContent'

const len = SliderImage.length -1;

function Slider() {

    const [activeIndex, setActiveIndex]= useState(0);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} />
            <Arrows
             prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
             nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots 
                activeIndex={activeIndex} 
                onClick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider
