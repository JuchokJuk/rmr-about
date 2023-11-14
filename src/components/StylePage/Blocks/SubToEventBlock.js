import React from 'react';
import PropTypes from 'prop-types';
import Register from '@components/Styles/Register'

const SubToEventBlock = ({ text }) => {

    return (
        <div className="grid-row forms_padd">
            <div className="grid-col-6">
                <Register text={text} />
            </div>
        </div>)
}


SubToEventBlock.propTypes = {
    text: PropTypes.string
}

export default SubToEventBlock;