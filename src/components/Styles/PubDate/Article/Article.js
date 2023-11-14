import React from 'react'
import PropTypes from 'prop-types';
import Description from '@components/Styles/Description';

const Article = ({ timestamp }) => {

    let day, month, year, date, date_string;
    let testDate = new Date(timestamp);
    
    if (testDate instanceof Date && !isNaN(testDate) ) {
        date = new Date(timestamp);
        day = date.getUTCDate();
        day = day >= 10 ? day : "0" + day;
        month = (date.getUTCMonth() + 1)
        month = month >= 10 ? month : "0" + month; // добавим 0 перед числом. 
        year = date.getFullYear();
        date_string = `${day}_${month}_${year}`;
    } 
    else {
        date_string = timestamp;
    }

    return (
        <div className="article-date">
            <Description.D2>
                {date_string}
            </Description.D2>
        </div>
    )
}

Article.propTypes = {
    timestamp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Article;