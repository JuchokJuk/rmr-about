import React from 'react';
import Quote from "@components/Styles/Quote";
import PropTypes from 'prop-types';
import Description from '@components/Styles/Description';

const TextAndQuoteBlock = ({ content, quoteTitle }) => {


    return (
        <div className="grid-row p1-padd">
            <div className="grid-col-2">
                <Description.D1>
                    {content}
                </Description.D1>
            </div>

            <div className="grid-col-4 fix-column-375 ">
                <Quote title={quoteTitle} />
            </div>
        </div>)
}


TextAndQuoteBlock.propTypes = {
    content: PropTypes.string,
    quoteTitle: PropTypes.string,
}

export default TextAndQuoteBlock;