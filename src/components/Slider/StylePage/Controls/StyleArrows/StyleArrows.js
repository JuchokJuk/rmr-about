import React from 'react'
import PropTypes from 'prop-types';

import StylePageArrowLeftSVG from '@assets/StylePageSlider/StylePageArrowLeft.svg'
import StylePageArrowRightSVG from '@assets/StylePageSlider/StylePageArrowRight.svg'

const StyleArrows = ({ next, prev }) => {

    return (
        <div className="style-slider__arrows">
            <div className="style-slider__arrow-left " onClick={prev} >
                <StylePageArrowLeftSVG />
            </div>

            <div className="style-slider__arrow-right" onClick={next}>
                <StylePageArrowRightSVG />
            </div>
        </div>
    )
}

StyleArrows.propTypes = {
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired
}

export default StyleArrows