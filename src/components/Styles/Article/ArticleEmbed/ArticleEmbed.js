import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Description from "@components/Styles/Description"

const ArticleEmbed = ({ service, embed, caption }) => {

    const [toggle, setToggle] = useState(false)
    let videoTag;

    switch(service) {
        case 'youtube':
            videoTag = (
                <iframe src={`${embed}?autoplay=1`} 
                        frameBorder="0" 
                        className="article-video__item"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen />)
        break;

        case 'vimeo':
            videoTag = (
                <iframe src={`${embed}&autoplay=1`} 
                        className="article-video__item"
                        frameBorder="0" allow="autoplay; fullscreen" 
                        allowFullScreen />)
        break;

        default: 
            videoTag = null
    }

    const description = caption ? (
        <div className='article-image__description'>
            <Description.Cap>
                {caption}
            </Description.Cap>
        </div>
    ) : '';

    return (
        <div className="article-video-wrapp">
            <div className={`article-video article-video_embed ${toggle ? 'article-video_clicked' : ''}`}>
                { !toggle ? (
                    <div className="article-video__play-btn"
                        onClick={() => setToggle(true)} />
                ) : videoTag }
            </div>

            { description }
        </div>
    )
}

ArticleEmbed.propTypes = {
    service: PropTypes.string,
    embed: PropTypes.string,
    caption: PropTypes.string
}

export default ArticleEmbed;