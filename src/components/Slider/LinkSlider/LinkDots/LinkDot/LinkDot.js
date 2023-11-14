import React from 'react'
import PropTypes from 'prop-types'

const LinkDot = ({onDotClick, currIndex, index}) => {

    return(
        <div className={`link-slider-dots__dot ${currIndex === index ? "link-slider-dots__dot_active " : ""}`}
             onClick={() => onDotClick(index)}>
        </div>
    )
}

LinkDot.propTypes = {
    onDotClick : PropTypes.func.isRequired,
    currIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default LinkDot
