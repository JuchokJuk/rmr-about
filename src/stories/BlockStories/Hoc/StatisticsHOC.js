import React from 'react';
import Statistics from '@components/StylePage/Blocks/StatisticsBlock';
import PropTypes from 'prop-types';

const StatisticsHOC = ({ 
    title1,
    label1,
    value1,

    title2,
    label2,
    value2,

    title3,
    label3,
    value3
 }) => (<Statistics items={{
            row1Column1: title1,
            row2Column1: label1,
            row3Column1: value1,
            row1Column2: title2,
            row2Column2: label2,
            row3Column2: value2,
            row1Column3: title3,
            row2Column3: label3,
            row3Column3: value3
        }}  />)


StatisticsHOC.propTypes = {
    title1: PropTypes.string,
    label1: PropTypes.string,
    value1: PropTypes.string,

    title2: PropTypes.string,
    label2: PropTypes.string,
    value2: PropTypes.string,

    title3: PropTypes.string,
    label3: PropTypes.string,
    value3: PropTypes.string,
}

export default StatisticsHOC;