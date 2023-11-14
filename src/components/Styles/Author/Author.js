import React from 'react';
import PropType from 'prop-types';
import AuthorPicture from './AuthorPicture';
import AuthorMeta from './AuthorMeta';

const BaseAuthor = ({ name, position, image, size }) => {
    
    return  (
                <div className="author">
                    <AuthorPicture  image={image} size={size} />
                    <AuthorMeta     name={name} position={position} />
                </div>
            )
}

BaseAuthor.propTypes = {
    name: PropType.string,
    position: PropType.string,
    image: PropType.object,
    size: PropType.string
}

export default BaseAuthor