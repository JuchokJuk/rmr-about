import React from 'react';
import PropTypes from 'prop-types';

import ScheduleItem from './ScheduleItem'

const Schedule = ({ items }) => {


    const scheduleList = items.map((schedule, index) => {
        return (<ScheduleItem 
                    key={`${schedule.data.time}_${index}`}
                    schedule={schedule.data} />)
    })

    return (
        <div className="schedule">
            {scheduleList}
        </div>
    )
}

Schedule.propTypes = {
    items: PropTypes.array
}

export default Schedule;