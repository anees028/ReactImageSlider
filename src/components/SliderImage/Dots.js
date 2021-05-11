import React from 'react'
import sliderImage from './sliderImage'

function Dots(props) {
    return (
        <div className="all-dots">
               {sliderImage.map((slide, i) => (
                   <span 
                        key={i} 
                        className={`${props.activeIndex === i ? "dot active-dot" : "dot"}`}
                        onClick={(event) => props.onClick((event.target.value = i))}
                    >
                   </span>
               ))} 
        </div>
    )
}

export default Dots
