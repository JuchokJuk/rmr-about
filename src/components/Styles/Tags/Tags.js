import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag/Tag'
import TagNew from './TagNew'

const Tags = ({ tags, bottom, size, tagsByUrl, noOutline }) => {

    let gridSize

    switch (size) {
        case 'large':
            gridSize = 'tags_large'
            break;

        case 'medium':
            gridSize = 'tags_medium'
            break;

        case 'small':
            gridSize = 'tags_small'
            break;

        case 'tiny':
            gridSize = 'tags_tiny'
            break;

        case 'search':
            gridSize = 'tags_search'
            break;

        case 'career':
            gridSize = 'tags_career'
            break;

        default:
            gridSize = 'tags_large'
    }

    if (noOutline) {
        gridSize = 'tags_dots'
    }

    const tagsList = !noOutline ? tags.map((item, index) => {
        return (<Tag key={item._id ? item._id : index} title={item.name} bottom={bottom} url={item.url} size={size} tagsByUrl={tagsByUrl}/>)
    }) : tags.map(item => {
        return (<TagNew key={item._id} title={item.name} vacancy={size === 'career'} />)
    })

    return (<div className={`tags ${gridSize}`}>
        {tagsList}
    </div>)
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
    bottom: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny', 'search', 'career']),
    tagsByUrl: PropTypes.object,
    isTagsByUrl: PropTypes.string,
    noOutline: PropTypes.bool,
}


export default Tags; 