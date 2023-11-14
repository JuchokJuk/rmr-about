import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '@components/BaseImage'
import DefaultPicture from '@components/Styles/Author/Default';

const Promo = ({ name = '', position = '', photo = {} }) => {
    return ( photo && (
        <div className="author-promo">
            <div className="author-promo__image">

            { !photo.url ? <DefaultPicture /> : 
                <BaseImage 
                    formats={photo} 
                    alt={name} 
                    type="avatar" 
                    targets={[64, 64, 64, 64, 64]} />
            }
            </div>

            <div className="author-promo__meta">
                <div className="author-promo__name">{name}</div>
                {
                    position && <div className="author-promo__position">{position}</div>
                }
            </div>

        </div>)
    )
}

Promo.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
}

export default Promo