import React from 'react';
import PropType from 'prop-types';

const CardLinkContainer = ({ link }) => {

    return <React.Fragment>
            {link && link.url ? (
            <div className="base-card__field base-card__link">
                <a href={`http://${link.url}/`} alt={link.caption} rel="noreferrer" target="_blank">{link.url || link.caption}</a>
            </div>) : ''}
        </React.Fragment>
}

CardLinkContainer.propTypes = {
    link: PropType.shape({
        url: PropType.string,
        caption: PropType.string,
    }),
}

export default CardLinkContainer;