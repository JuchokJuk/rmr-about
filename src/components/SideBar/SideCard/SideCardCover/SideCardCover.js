import React from 'react';
import PropType from 'prop-types'
import BaseImage from "@components/BaseImage"


const SideCardCoverContainer = ({ image, scrollPosition }) => {

    return <React.Fragment> { image ? (
            <div className="side-card__field side-card__field--image ie-flow_image-wrapper">
                <BaseImage
                    formats={image.photo}
                    type="card" 
                    targets={[350, 280, 160, 160, 328]} 
                    scrollPosition={scrollPosition}/>
            </div>) : null }
        </React.Fragment>
}

SideCardCoverContainer.propTypes = {
    image : PropType.object,
    scrollPosition: PropType.any
}

export default SideCardCoverContainer


