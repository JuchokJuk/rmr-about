import React from 'react';
import PropType from 'prop-types'

const SideCardHeadingContainer = ({ header = "" }) => {
    return <React.Fragment> 
        { 
            header.trim() ? (
            <div className="side-card__field side-card__field--header">
                { header }
            </div>) : null 
        }
    </React.Fragment>
}

SideCardHeadingContainer.propTypes = {
    header : PropType.string
}

export default SideCardHeadingContainer