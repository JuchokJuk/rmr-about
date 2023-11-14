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

    return <React.Fragment>
        { slides.length > 1 ? (<div className="card-slider__dots">
            { dots }
        </div>) : null }
    </React.Fragment>
}

LinkDots.propTypes = {
    slides: PropTypes.array.isRequired,
    onDotClick : PropTypes.func.isRequired,
    currIndex: PropTypes.number.isRequired
}

export default LinkDots
