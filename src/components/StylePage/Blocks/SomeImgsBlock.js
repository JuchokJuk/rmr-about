import React from 'react';
import PropTypes from 'prop-types';
import Image from '@components/Styles/Image'

const SomeImgsBlock = ({ items }) => {

    return (<div className="grid-row images_padd">
        <Image images={items} />
    </div>)
}

SomeImgsBlock.propTypes = {
    items: PropTypes.array.isRequired
}

export default SomeImgsBlock;