import React from 'react';
import Image from '@components/Styles/Image';
import PropTypes from 'prop-types';

const TwoImageBlock = ({ items, caption }) => {

    return (
        <div className="grid-row article-images two-image_padd">
            <Image
                caption={caption}
                images={items} />
        </div>)

}

TwoImageBlock.propTypes = {
    items: PropTypes.array.isRequired,
    caption: PropTypes.string
}

export default TwoImageBlock;