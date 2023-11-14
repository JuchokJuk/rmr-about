import React from 'react';
import PubDate from '@components/Styles/PubDate'
import PropType from 'prop-types';

const CardPubDateContainer = ({ timestamp }) => {

    return <React.Fragment>
            { timestamp && (
                <div className="card-base__field base-card__pubdate">
                    <PubDate.Card timestamp={timestamp} />
                </div>) }
            </React.Fragment>
}

CardPubDateContainer.propTypes = {
    timestamp : PropType.oneOfType([
        PropType.number,
        PropType.string
    ])
}

export default CardPubDateContainer;