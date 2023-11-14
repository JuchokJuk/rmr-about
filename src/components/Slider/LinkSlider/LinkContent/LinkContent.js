import React from 'react'
import PropTypes from 'prop-types'
import Description from '@components/Styles/Description'

const LinkContent = ({ override, original }) => {

    return (
        <div className="link-slider__content">
            <Description.D2>
                { override.intro || original.intro }
            </Description.D2>
        </div>
    )
}

LinkContent.propTypes = {
    override: PropTypes.object,
    original: PropTypes.object
}



export default LinkContent