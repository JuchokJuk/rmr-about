import React from 'react'
import PropTypes from 'prop-types';

const Divider = ({ header, newVersion }) => {

    return (
        <React.Fragment>
            {
                newVersion ? <div className={`true-separator`} />
                : <div className={`wide-separator ${header ? 'wide-separator_header' : ''}`} />
            }
        </React.Fragment>
    )
}

Divider.propTypes = {
    header: PropTypes.bool,
    newVersion: PropTypes.bool,
}

export default Divider;