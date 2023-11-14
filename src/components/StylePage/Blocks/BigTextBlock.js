import React from 'react';
import Paragraph from "@components/Styles/Paragraph";
import PropTypes from 'prop-types';

const BigTextBlock = ({ content }) => {

    return (
        <div className="grid-row p2_padd">
            <div className="grid-col-6">
                <Paragraph.P2>
                    {content }
                </Paragraph.P2>
            </div>
        </div>)
}


BigTextBlock.propTypes = {
    content: PropTypes.string.isRequired
}

export default BigTextBlock;