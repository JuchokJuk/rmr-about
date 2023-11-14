import React from 'react';
import StyleSlider from '@components/Slider/StylePage';
import PropTypes from 'prop-types';

const SliderBlock = ({ slides, caption }) => {

    return (
            <StyleSlider slides={slides} 
                        caption={caption} />)
}
    

SliderBlock.propTypes = {
    slides: PropTypes.array.isRequired,
    caption: PropTypes.string
}

export default SliderBlock;