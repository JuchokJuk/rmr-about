import React from 'react'
import PropTypes from 'prop-types'

const StoryContainer = ({ children, row, blue }) => {
    return (
        <div className={`grid-container ${blue ? 'blue_container' : ''}`}>
            {   row ?
                <div className="grid-row">
                    {children}
                </div>
                :
                <div className="grid-row">
                    <div className="grid-col-6">
                        {children}
                    </div>
                </div>
            }
        </div>
    )
}

StoryContainer.propTypes = {
    children: PropTypes.node,
    row: PropTypes.bool,
    blue: PropTypes.bool
}

export default StoryContainer;