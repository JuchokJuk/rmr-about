import React from 'react';

import PropTypes from 'prop-types';
import Bullets from '@components/Styles/Bullets';

const BulletsHOC = ({ isString, items }) => {

    return (<div className="grid-row numbers_padd">
        <Bullets isString={isString} items={[
            {
                title: items.row1Column1,
                label: items.row2Column1,
                value: items.row3Column1
            },
            {
                title: items.row1Column2,
                label: items.row2Column2,
                value: items.row3Column2
            },
            {
                title: items.row1Column3,
                label: items.row2Column3,
                value: items.row3Column3
            },
        ]}  />
    </div>)
}


BulletsHOC.propTypes = {
    isString: PropTypes.bool,
    items: PropTypes.object.isRequired,
}

export default BulletsHOC;