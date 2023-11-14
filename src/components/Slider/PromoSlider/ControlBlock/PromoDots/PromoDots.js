import React from 'react'

import PropTypes from 'prop-types'

const PromoDots = ({slides, currIndex, onDotClick}) => {

    const dots = slides.map((dot, index) => {
        return (
            <div key={dot.id}
                 className={`p-slider-dots__dot ${currIndex === index ? "p-slider-dots__dot_active " : ""}`}
                 onClick={() => onDotClick(index)}>
            </div>
        )
    })

    return(
        <div className="p-slider__dots">
            {dots}
        </div>
    )
}

PromoDots.propTypes = {
    slides: PropTypes.array.isRequired,
    currIndex: PropTypes.number.isRequired,
    onDotClick : PropTypes.func.isRequired
}

export default PromoDots