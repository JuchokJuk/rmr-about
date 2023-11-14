import React from 'react'
import PropTypes from 'prop-types';
import Paragraph from '@components/Styles/Paragraph';

const TagNew = ({ title, vacancy}) => {
    const block = vacancy ? "p2" : "p3"

    return (
        <div className={`new-tag`}>
            {
                block == "p2" ? <Paragraph.P2>{title}</Paragraph.P2> : null
            }
            {
                block == "p3" ? <Paragraph.P1short>{title}</Paragraph.P1short> : null
            }
        </div>
    )
}

TagNew.propTypes = {
    title: PropTypes.string.isRequired,
    vacancy: PropTypes.bool
}

export default TagNew;