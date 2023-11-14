import React from 'react'
import PropTypes from 'prop-types'
import Description from '@components/Styles/Description'

const VideoCaption = ({ caption }) => {
    return (<div className='article-video__description'>
            <Description.Cap>
                {caption}
            </Description.Cap>
        </div>)
}

VideoCaption.propTypes = {
    caption: PropTypes.string
}

export default VideoCaption;

