import React from 'react';
import Video from "@components/Styles/Video";
import PropTypes from 'prop-types';

const VideoBlock = ({ url, poster, text, isGif }) => {

    return (
        <div className="grid-row video_padd">
            <div className="grid-col-6">
                <Video 
                    url={url} 
                    poster={poster}
                    caption={text}
                    isGif={isGif}
                />
            </div>
        </div>)
}


VideoBlock.propTypes = {
    url: PropTypes.string,
    poster: PropTypes.object,
    text: PropTypes.string,
    isGif: PropTypes.bool
}

export default VideoBlock;