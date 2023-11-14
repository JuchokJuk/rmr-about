import React from 'react';
import Author from '@components/Styles/Author'
import PropType from 'prop-types';

const CardAuthorContainer = ({ author }) => {

    return <React.Fragment>
                {author && author.isAuthor && author.image && author.image.formats !== undefined ? (
                    <div className="base-card__field base-card__author">
                        <Author
                            name={author.name}
                            position={author.position}
                            image={author.image} />
                    </div>) : ' '}
            </React.Fragment>
}

CardAuthorContainer.propTypes = {
    author : PropType.shape({
        isAuthor: PropType.bool,
        image: PropType.shape({
            formats: PropType.object
        }),
        name: PropType.string,
        position: PropType.string
    })
}

export default CardAuthorContainer;