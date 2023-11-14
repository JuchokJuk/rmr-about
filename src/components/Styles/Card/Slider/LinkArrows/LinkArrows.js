import React from 'react'

import PropTypes from 'prop-types'


import StylePageArrowRightSVG from '@assets/StylePageSlider/StylePageArrowRight.svg'
import StylePageArrowLeftSVG from '@assets/StylePageSlider/StylePageArrowLeft.svg'

const LinkArrows = ({next, prev, slides}) => {

    return <React.Fragment>
        { slides.length > 1 ? <div className="card-slider__arrows">
            <div className="card-slider__arrow-left" onClick={prev}>
                <StylePageArrowLeftSVG />
            </div>
            <div className="card-slider__arrow-right" onClick={next}>
                <StylePageArrowRightSVG />
            </div>
        </div> : null }
    </React.Fragment>
}

LinkArrows.propTypes = {
    prev: PropTypes.func,
    next: PropTypes.func,
    slides: PropTypes.array
}

export default LinkArrows