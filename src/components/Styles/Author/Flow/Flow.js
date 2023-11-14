import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '@components/BaseImage';
import DefaultImage from '@components/Styles/Author/Default'

const Flow = ({ name, position, image }) => {

    return (
        <div className="author-flow">
            <div className="author-flow__image">
                { image && image.url 
                    ?   <BaseImage formats={image}
                            type="avatar" 
                            alt={name}
                            targets={[64, 64, 64, 64, 64]} />
                    :   <DefaultImage />
                }
            </div>

            <div className="author-flow__meta">
                <div className="author-flow__name">{name}</div>
                {
                    position && <div className="author-flow__position">{position}</div>
                }
            </div>

        </div>
    )
}

Flow.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.object,
}

export default Flow