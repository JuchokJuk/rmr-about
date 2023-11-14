import React from 'react';
import Video from "@components/Styles/Video";
import PropTypes from 'prop-types';

const EmbedVideoBlock = ({ video }) => {

    return (
        <div className="grid-row video_padd">
            <div className="grid-col-6">
                <Video service={video.service}
                       url={video.embed}
                       caption={video.caption} />
            </div>
        </div>)
}


EmbedVideoBlock.propTypes = {
    video: PropTypes.object,
}

export default EmbedVideoBlock;