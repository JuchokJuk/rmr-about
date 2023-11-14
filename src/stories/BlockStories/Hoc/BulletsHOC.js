import React from 'react';

import PropTypes from 'prop-types';
import Bullets from '@components/Styles/Bullets';

const BulletsHOC= ({ 
    title1,
    label1,
    value1,

    title2,
    label2,
    value2,

    title3,
    label3,
    value3
 }) => {

    return (<div className="grid-row numbers_padd">
        <Bullets items={[
            {
                title: title1,
                label: label1,
                value: value1
            },
            {
                title: title2,
                label: label2,
                value: value2
            },
            {
                title: title3,
                label: label3,
                value: value3
            },
        ]}  />
    </div>)
}


BulletsHOC.propTypes = {
    title1: PropTypes.string,
    label1: PropTypes.string,
    value1: PropTypes.string,

    title2: PropTypes.string,
    label2: PropTypes.string,
    value2: PropTypes.string,

    title3: PropTypes.string,
    label3: PropTypes.string,
    value3: PropTypes.string
}

export default BulletsHOC;