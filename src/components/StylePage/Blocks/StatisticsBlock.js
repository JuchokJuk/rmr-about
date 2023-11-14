import React from 'react';
import Statistics from '@components/Styles/Statistics';
import PropTypes from 'prop-types';

const StatisticsBlock = ({ items }) => {

    return (
        <div className="grid-row numbers_padd fix-achievements-block-375">
            <Statistics items={[
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


StatisticsBlock.propTypes = {
    items: PropTypes.object.isRequired
}

export default StatisticsBlock;