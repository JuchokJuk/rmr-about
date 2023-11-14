import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"

const VideoContainer = ({ show, url, service, isGif }) => {
    let videoTag;

    switch(service) {
        case 'youtube':
            videoTag = (
                <iframe src={`${url}`} 
                        frameBorder="0" 
                        className="article-video__item"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen />)
        break;

        case 'vimeo':
            videoTag = (
                <iframe src={`${url}`} 
                        className="article-video__item"
                        frameBorder="0" allow="autoplay; fullscreen" 
                        allowFullScreen />)

        break;

        case undefined:
            isGif
                ? videoTag = (<video src={url} autoPlay muted loop={true}> </video>)
                : videoTag = (<video src={url} autoPlay controls> </video>)
        break;

        default: 
            videoTag = null
    }

    return (
        <CSSTransition in={isGif || show} timeout={300} classNames="article__video_animation" unmountOnExit>
            <div className={`article__video-container`}>
                { videoTag }
            </div>
        </CSSTransition>
    )
}

VideoContainer.propTypes = {
    show: PropTypes.bool,
    url : PropTypes.string,
    service: PropTypes.string,
    isGif: PropTypes.bool
}

export default VideoContainer;

