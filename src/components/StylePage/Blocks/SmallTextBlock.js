import React from 'react';
import Paragraph from "@components/Styles/Paragraph";
import PropTypes from 'prop-types';

const SmallTextBlock = ({ content }) => {

    return (
        <div className="grid-row p5_padd">
            <div className="grid-col-6">
                <Paragraph.P3>
                    { content }
                </Paragraph.P3>
            </div>
        </div>)
}


SmallTextBlock.propTypes = {
    content: PropTypes.string.isRequired
}

export default SmallTextBlock;