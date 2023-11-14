import React from 'react';
import Paragraph from "@components/Styles/Paragraph";
import PropTypes from 'prop-types';

const TwoColumnBlock = ({ content1, content2 }) => {

    return (
        <div className="grid-row two-column_padd">
            <div className="grid-col-3">
                <Paragraph.P3>
                    { content1 }
                </Paragraph.P3>
            </div>

            <div className="grid-col-3 fix-paragraph-3-column">
                <Paragraph.P3>
                    { content2 }
                </Paragraph.P3>
            </div>
        </div>
    )
}


TwoColumnBlock.propTypes = {
    content1: PropTypes.string,
    content2: PropTypes.string
}

export default TwoColumnBlock;