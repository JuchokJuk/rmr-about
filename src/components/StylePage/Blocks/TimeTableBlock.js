import React from 'react';
import Schedule from "@components/Styles/Schedule";
import PropTypes from 'prop-types';

const TimeTableBlock = ({ items }) => {

    return (
        <div className="grid-row p1-padd">
            <div className="grid-col-6">
                <Schedule items={items} />
            </div>
        </div>)
}

TimeTableBlock.propTypes = {
    items: PropTypes.array,
}

export default TimeTableBlock;