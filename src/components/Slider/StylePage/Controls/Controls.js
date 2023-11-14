import React from 'react'
import PropTypes from 'prop-types';
import './index.less'

import StyleArrows from './StyleArrows';
import StyleDots from './StyleDots';


const Controls = ({ dots, currIndex, onDotClick, prev, next}) => {

    return (
        <div className="stylepage-controls">

            <StyleDots dots={dots}
                       currIndex={currIndex}
                       onDotClick={onDotClick} />

            <StyleArrows next={next} prev={prev} />

        </div>)
}

Controls.propTypes = {
    dots : PropTypes.array.isRequired,
    currIndex: PropTypes.number.isRequired,
    next : PropTypes.func.isRequired,
    prev : PropTypes.func.isRequired,
    onDotClick : PropTypes.func.isRequired
}

export default Controls