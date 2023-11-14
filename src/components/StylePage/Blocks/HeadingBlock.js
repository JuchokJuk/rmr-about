import React from 'react';
import Heading from '@components/Styles/Heading';
import PropTypes from 'prop-types';

const HeadingBlock = ({ level, children, content }) => {

    switch (level) {
        case 2:
            return (<div className="grid-row heading-block h2_padd">
                        <div className="grid-col-6">
                            <Heading.H2>
                                {content || children}
                            </Heading.H2>
                        </div>
                    </div>)
        case 3: 
            return (<div className="grid-row heading-block h3_padd">
                        <div className="grid-col-6">
                            <Heading.H3>
                                {content || children}
                            </Heading.H3>
                        </div>
                    </div>)
        case 4:
            return (<div className="grid-row heading-block h4_padd">
                        <div className="grid-col-6">
                            <Heading.H4>
                                {content || children}
                            </Heading.H4>
                        </div>
                    </div>)
        case 5:
            return (<div className="grid-row heading-block h5_padd">
                <div className="grid-col-6">
                    <Heading.H5>
                        {content || children}
                    </Heading.H5>
                </div>
            </div>)
        default: 
            return ''
    }
}

HeadingBlock.propTypes = {
    level: PropTypes.number.isRequired,
    children: PropTypes.node,
    content: PropTypes.string
}

export default HeadingBlock;