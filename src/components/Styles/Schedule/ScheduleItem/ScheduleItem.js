import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from "@components/Styles/Paragraph";
import Author from '@components/Styles/Author';
import { useSelector } from 'react-redux';

const ScheduleItem = ({ schedule }) => {
    const employees = useSelector((state) => state.employees.apiEmployees)

    const time = schedule.time
    const author = schedule.members[0] ? schedule.members[0] : null

    if (author && author._id) {
        if (employees[author._id]) {
            author.name = employees[author._id].name
            author.position = employees[author._id].position
            author.image = employees[author._id].photo
        }
    }

    return (
        <div className="schedule__item">
            <div className="schedule__time">
                <Paragraph.P1>
                    {time}
                </Paragraph.P1>
            </div>

            <div className="schedule__title">
                <Paragraph.P2>
                    {schedule.heading}
                </Paragraph.P2>
            </div>

            { author ? 
            <div className="schedule__author">
                <Author name={`${author.name} ${author.lastName}`}
                        position={author.position}
                        image={author.photo} />
            </div> : '' }

            <div className="schedule__content">
                <Paragraph.P1>
                    {schedule.description}
                </Paragraph.P1>
            </div>
        </div>
    )
}

ScheduleItem.propTypes = {
    schedule: PropTypes.object
}

export default ScheduleItem;