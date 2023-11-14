import React from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';

//import './Icon.less';

const Icon = ({src, alt}) => {
    return (
        <div className="icon">
            <Image className='icon__content' src={src} alt={alt || 'person icon'}/>
        </div>
    );
};

Icon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Icon;