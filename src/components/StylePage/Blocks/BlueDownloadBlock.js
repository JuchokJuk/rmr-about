import React from 'react';
import PropTypes from 'prop-types';
import Research from '@components/Styles/Research'

const BlueDownloadBlock = ({ content, title, file, isSticky }) => {

    let fileUrl = file.url ? file.url : ''
    let fileSize = file.size? file.size : 0

    return (
        <div className="grid-row forms_padd">
            <div className="grid-col-6">
                <Research.Download 
                    content={content}
                    title={title} 
                    fileUrl={fileUrl}
                    size={fileSize}
                    isSticky={isSticky}
                />
            </div>
        </div>)
}


BlueDownloadBlock.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    file: PropTypes.object,
    isSticky: PropTypes.bool
}

export default BlueDownloadBlock;