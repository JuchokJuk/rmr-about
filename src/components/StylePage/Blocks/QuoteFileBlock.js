import React from 'react';
import Quote from "@components/Styles/Quote";
import Paragraph from '@components/Styles/Paragraph';

import PropTypes from 'prop-types';

const QuoteFileBlock = ({title, filesize, content, url}) => {

    return (
        url ?
        <div className="grid-row quote_file_padd">
            <div className="grid-col-2 grid-columns">
                <Quote.Download
                    url={url}
                    size={filesize} 
                    title={title}
                    isSticky />
            </div>

            <div className="grid-col-4 grid-columns">
                <Paragraph.P1>
                    {content}
                </Paragraph.P1>
            </div>
        </div> : ''
    )
}


QuoteFileBlock.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}

export default QuoteFileBlock;