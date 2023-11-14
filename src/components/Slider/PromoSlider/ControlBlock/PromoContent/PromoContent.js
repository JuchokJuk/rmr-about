import React from 'react'

import PropTypes from 'prop-types'
import Author from '@components/Styles/Author';

const PromoContent = ({ slideContent }) => {

    let subContent = '';

    if(slideContent.author && slideContent.author.name && slideContent.author.position ) {
        let {name, position, photo} = slideContent.author
        subContent = <Author image={photo} name={name} position={position}  />
    } else {
        subContent = slideContent.caption && slideContent.title;
    }

    return (
        <React.Fragment>
            <div className="p-slider__content">
                { slideContent.heading }
            </div>

            <div className="p-slider__sub-content">
                { subContent }
            </div>
        </React.Fragment>
    )
}

PromoContent.propTypes = {
    slideContent: PropTypes.object.isRequired
}

export default PromoContent