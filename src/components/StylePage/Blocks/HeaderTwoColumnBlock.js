import React from 'react';
import Paragraph from "@components/Styles/Paragraph";
import Heading from "@components/Styles/Heading";
import PropTypes from 'prop-types';

const HeaderTwoColumnBlock = ({ heading1, 
                                heading2,
                                content1,
                                content2 }) => {

    return (
        <div className="grid-row two-column_padd">
            <div className="grid-col-3 ">
                <div className="h5-padd">
                    <Heading.H5>
                        { heading1 }
                    </Heading.H5>
                </div>

                <Paragraph.P3>
                    { content1 }
                </Paragraph.P3>
            </div>

            <div className="grid-col-3 fix-column-375">
                <div className="h5-padd">
                    <Heading.H5>
                        { heading2 }
                    </Heading.H5>
                </div>

                <Paragraph.P3>
                    {content2 }
                </Paragraph.P3>
            </div>
        </div>)
}
    

HeaderTwoColumnBlock.propTypes = {
    heading1: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    content1: PropTypes.string.isRequired,
    content2: PropTypes.string.isRequired
}

export default HeaderTwoColumnBlock;