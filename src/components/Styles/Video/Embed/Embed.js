import React from 'react';
import PropTypes from 'prop-types';
import PlayBtn from '../PlayBtn';
import VideoPoster from '../Poster';
import VideoContainer from '../VideoContainer'

const EmbedVideoComponent = ({ url, poster, isClicked, onClick, service }) => {

    return (
        <React.Fragment>
            <div className="article-video">
                {poster ? <PlayBtn show={isClicked} onClick={onClick} /> : null}
                {poster ? <VideoPoster show={isClicked} poster={poster} /> : null}
                <VideoContainer show={true} url={url} service={service} />
            </div>
        </React.Fragment>)
}

EmbedVideoComponent.propTypes = {
    url: PropTypes.string,
    videoUrl: PropTypes.string,
    poster: PropTypes.object,
    isClicked: PropTypes.bool,
    onClick: PropTypes.func,
    service: PropTypes.string
}

export default EmbedVideoComponent;