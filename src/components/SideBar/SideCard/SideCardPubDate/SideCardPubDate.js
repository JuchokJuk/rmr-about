import React from 'react';
import PropType from 'prop-types'
import PubDate from '@components/Styles/PubDate'

const SideCardPubDate = ({ timestamp }) => {

    return <React.Fragment> { timestamp ? (
        <div className="side-card__field side-card__field--date">
          <PubDate.Article timestamp={timestamp} />
        </div> ) : null }
      </React.Fragment>
}

SideCardPubDate.propTypes = {
    timestamp: PropType.oneOfType([
        PropType.number,
        PropType.string
    ]),
}

export default SideCardPubDate