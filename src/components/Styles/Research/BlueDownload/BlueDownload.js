import React from 'react';
import PropTypes from 'prop-types';
import Quote from '@components/Styles/Quote';
import Paragraph from '@components/Styles/Paragraph'

const BlueDownload = ({ content, title, fileUrl, size, isSticky }) => {

    return (<div className="research-download-quote">

        <div className="research-download__content">
            <Paragraph.P1 content={content} />
        </div>

        <div className="research-download__quote quote_disable-top-margin">
            <Quote.Download 
                title={title}
                size={size}
                url={fileUrl}
                isSticky={isSticky} />
        </div>
    </div>)
}

BlueDownload.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    fileUrl: PropTypes.string,
    size: PropTypes.number,
    isSticky: PropTypes.bool
}

export default BlueDownload