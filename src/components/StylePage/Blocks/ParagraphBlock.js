import React from 'react';
import Paragraph from '@components/Styles/Paragraph';
import PropTypes from 'prop-types';

const ParagraphBlock = ({ items }) => {

    return (
        <div className="grid-row p1_padd">
            <div className="grid-col-6">
                <Paragraph>
                    {
                        items.map((p, i) => {
                          
                            return (
                                <Paragraph.P1 
                                    key={i + 'paragraph'} 
                                    content={p.data.text} />
                            )
                        })
                    }
                </Paragraph>
            </div>
        </div>)
}
    

ParagraphBlock.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
}

export default ParagraphBlock;