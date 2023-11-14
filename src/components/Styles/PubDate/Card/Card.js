import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ timestamp }) => {

    let day, month, year, date, date_string;

    if (typeof timestamp === "number") {
        date = new Date(timestamp);
        day = date.getUTCDate();
        month = (date.getUTCMonth() + 1)
        month = month >= 10 ? month : "0" + month;
        year = date.getFullYear();
        date_string = `${day}_${month}_${year}`;
    } 
    else if (typeof timestamp === "string") {
        date_string = timestamp;
    }

    return (
        <div className="card-date">
            {date_string}
        </div>
    )
}

Card.propTypes = {
    timestamp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Card;