import React from 'react'

import PropTypes from 'prop-types'

const StyleDot = ({onDotClick, currIndex, index}) => {

    return (
        <div className={`stylepage-slider__dot ${currIndex === index ? "stylepage-slider__dot_active" : ""}`}
             onClick={() => onDotClick(index)} />
    )
}

StyleDot.propTypes = {
    onDotClick : PropTypes.func.isRequired,
    currIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default StyleDot