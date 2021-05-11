import React from 'react'
import SliderImage from './sliderImage';

function SliderContent(props) {
    return (
        <section>
            {SliderImage.map((slide, i) => (
                <div
                    key={i} 
                    className={i === props.activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.image} alt="" />
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-text">{slide.description}</p>
                </div>
            )) }
            
        </section>
    )
}

export default SliderContent
