import React from 'react';

import PropTypes from 'prop-types';
import Paragraph from '@components/Styles/Paragraph';


const OfficeBlock = ({city, address}) => {
    return (
        <div className="officeBlock">
            <Paragraph.P1>
                {city},
            </Paragraph.P1>
            <Paragraph.P1>
                {address}
            </Paragraph.P1>
        </div>
    );
};

OfficeBlock.propTypes = {
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

OfficeBlock.defaultProps = {
    city: '',
    address: '',
};

export default OfficeBlock;