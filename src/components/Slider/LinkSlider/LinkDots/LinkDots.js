import React from 'react'

import PropTypes from 'prop-types'
import LinkDot from './LinkDot'

const LinkDots = ({slides, onDotClick, currIndex}) => {

    const dots = slides.map((dot, index) => {
        return (
            <LinkDot key={dot._id}
                     onDotClick={onDotClick}
                     currIndex={currIndex}
                     index={index}/>
        )
    })

    return(
        <div className="link-slider__dots">
            { dots }
        </div>
    )
}

LinkDots.propTypes = {
    slides: PropTypes.array.isRequired,
    onDotClick : PropTypes.func.isRequired,
    currIndex: PropTypes.number.isRequired
}

export default LinkDots
