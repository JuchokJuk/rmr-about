import React from 'react';
import PropTypes from 'prop-types';
import PlayBtn from '../PlayBtn';
import VideoPoster from '../Poster';
import VideoContainer from '../VideoContainer'

const OriginalVideoComponent = ({ url, poster, isClicked, onClick, isGif }) => {
    return (
        <React.Fragment>
            <div className="article-video">
                {!isGif && <PlayBtn show={isClicked} onClick={onClick}     />}
                {!isGif && <VideoPoster show={isClicked} poster={poster}   />}
                <VideoContainer show={isClicked} url={url} isGif={isGif}/>
            </div>
        </React.Fragment>)
}

OriginalVideoComponent.propTypes = {
    url: PropTypes.string,
    poster: PropTypes.object,
    isClicked: PropTypes.bool,
    onClick: PropTypes.func,
    isGif: PropTypes.bool
}

export default OriginalVideoComponent;