import React from 'react'

import PropTypes from 'prop-types'


import StylePageArrowRightSVG from '@assets/StylePageSlider/StylePageArrowRight.svg'
import StylePageArrowLeftSVG from '@assets/StylePageSlider/StylePageArrowLeft.svg'

const LinkArrows = ({ next, prev }) => {

    return(
        <div className="link-slider__arrows">
            <div className="link-slider__arrow-left" onClick={prev}>
                <StylePageArrowLeftSVG />
            </div>
            <div className="link-slider__arrow-right" onClick={next}>
                <StylePageArrowRightSVG />
            </div>
        </div>
    )
}

LinkArrows.propTypes = {
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}

export default LinkArrows