import React from 'react';
import Tags from '@components/Styles/Tags'
import PropType from 'prop-types'

const CardTagsContainer = ({ tags, tagStyles, tagsByUrl }) => {

    return <React.Fragment>
        {  tags && tags.length ? (
                <div className="card-base__field base-card__tags">
                    <Tags size="small" 
                          tags={tags} 
                          tagStyles={tagStyles}
                          tagsByUrl={tagsByUrl}
                          noOutline />
                </div>) : null  }
    </React.Fragment>
}

CardTagsContainer.propTypes = {
    tags : PropType.array,
    tagStyles: PropType.object,
    tagsByUrl: PropType.object
}

export default CardTagsContainer;