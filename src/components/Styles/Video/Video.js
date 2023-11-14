import React, { useState } from 'react'
import PropTypes from 'prop-types'
import OriginalComponent from './Original'
import EmbedComponent from './Embed';
import VideoCaption from './VideoCaption'

const Video = ({ url, poster, service, caption, isGif }) => {

    const [isClicked, setClicked] = useState(false);
    const isClickCallback = () => setClicked(true);
    let renderTags = []

    if (service) {
        renderTags.push(<EmbedComponent 
                                key="EmbedVideoUniqKey"
                                service={service}
                                poster={poster}
                                url={url}
                                isClicked={isClicked}
                                onClick={isClickCallback} />)
    } else {
        renderTags.push(<OriginalComponent
                                key="OriginalVideoUniqKey"
                                isGif={isGif}
                                url={url}
                                poster={poster}
                                isClicked={isClicked}
                                onClick={isClickCallback} />)
    }

    if (caption) {
        renderTags.push(<VideoCaption key="VideoCaptionUniqKey" caption={caption} />)
    }

    return <React.Fragment>{ renderTags }</React.Fragment>

}

Video.defaultProps = {
    service: ''
}

Video.propTypes = {
    url: PropTypes.string,
    poster: PropTypes.object,
    service: PropTypes.string,
    caption: PropTypes.string,
    isGif: PropTypes.bool
}

export default Video;

