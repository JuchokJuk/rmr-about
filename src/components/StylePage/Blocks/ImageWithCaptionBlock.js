import React from 'react';
import Picture from '@components/Styles/Picture';
import PropTypes from 'prop-types';

const ImageWithCaptionBlock = ({ image, caption, scrollPosition }) => {

    return (
        <div className="grid-row image_padd">
            <div className="grid-col-6">
                <Picture image={image} desc={caption} scrollPosition={scrollPosition} />
            </div>
        </div>)
}

ImageWithCaptionBlock.propTypes = {
    image: PropTypes.object,
    caption: PropTypes.string,
    scrollPosition: PropTypes.any
}

export default ImageWithCaptionBlock;