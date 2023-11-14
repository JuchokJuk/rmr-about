import React from 'react'

import PropTypes from 'prop-types';
import Paragraph from '@components/Styles/Paragraph';
import BlueDownload from '@components/Styles/Research/BlueDownload'

const Research = ({ children, caption }) => {

    return (
        <div className="research-download">
            <div className="research-download__caption">
                <Paragraph.P2>
                    {children}
                </Paragraph.P2>
            </div>

            <div className="research-download__btn-wrapper">
                <button className="research-download__btn">
                    {caption}
                </button>
            </div>
        </div>
    )
}

Research.propTypes = {
    caption: PropTypes.string.isRequired,
    children: PropTypes.node
}

Research.Download = BlueDownload;

export default Research;