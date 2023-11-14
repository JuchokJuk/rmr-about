import React from 'react'

import StylePageArrowRightSVG from '@assets/StylePageSlider/StylePageArrowRight.svg'
import StylePageArrowLeftSVG from '@assets/StylePageSlider/StylePageArrowLeft.svg'

import PropTypes from 'prop-types'

const PromoArrows = ({prev, next}) => {

    return (
        <div className="p-slider-arrows">
            <div className="p-slider-arrows__arrow-right"
                 onClick={prev}>
                <StylePageArrowLeftSVG />
            </div>

            <div className="p-slider-arrows__arrow-left"
                 onClick={next}>
                <StylePageArrowRightSVG />
            </div>
        </div>
    )
}

PromoArrows.propTypes = {
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}

export default PromoArrows