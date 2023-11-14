import React from 'react'
import PropTypes from 'prop-types'
import StyleDot from './StyleDot'

const StyleDots = ({ dots, currIndex, onDotClick }) => {

    const dotsList = dots.map((_, index) => {
        return (
            <StyleDot key={"k" + index}
                      currIndex={currIndex}
                      onDotClick={onDotClick}
                      index={index}  />
        )
    })

    return (
        <div className="stylepage-slider__dots">
            {dotsList}
        </div>
    )
}

StyleDots.propTypes = {
    dots: PropTypes.array.isRequired,
    currIndex: PropTypes.number.isRequired,
    onDotClick: PropTypes.func.isRequired
}

export default StyleDots