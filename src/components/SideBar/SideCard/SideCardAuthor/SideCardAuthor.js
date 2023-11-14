import React from 'react';
import PropType from 'prop-types'
import CardAuthor from "@components/Styles/Author";

const SideCardAuthor = ({ author, scrollPosition }) => {

    return <React.Fragment> { author ? (
        <div className="side-card__field side-card__field--author">
          <CardAuthor
                    name={author.name}
                    position={author.position}
                    image={author.photo}
                    scrollPosition={scrollPosition} />
        </div>) : null }
    </React.Fragment>
}

SideCardAuthor.propTypes = {
    author: PropType.object,
    scrollPosition: PropType.any
}

export default SideCardAuthor