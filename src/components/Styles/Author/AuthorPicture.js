import React from 'react';
import PropType from 'prop-types';
import BaseImage from '@components/BaseImage';
import DefaultImage from '@components/Styles/Author/Default'
import { getAuthorPictureSizeClass } from './helper'

const AuthorPicture = ({ image, size }) => {

    let clSize = getAuthorPictureSizeClass(size)

    return  (<div className={`author__image ${clSize}`}>
                { image && image.url 
                        ? <BaseImage formats={image}
                            type="avatar" 
                            targets={[128, 128, 128, 128, 128]} /> 
                        :  <DefaultImage /> }
            </div>)
}

AuthorPicture.propTypes = {
    image: PropType.object,
    size: PropType.string
}

export default AuthorPicture