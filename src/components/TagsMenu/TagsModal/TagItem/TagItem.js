import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addSelectedTag, removeSelectedTag } from '@store/tags/tagsAction';
import { useDispatch, useSelector } from 'react-redux';

const TagItem = ({ tag }) => {

    let dispatch = useDispatch()

    const [active, setActive] = useState(false);
    const selectedTags = useSelector((state) => state.tags.selectedTags)
    const activeUrl = useSelector((state) => state.tags.activeUrl)

    useEffect(() => {
        if (selectedTags.find((el) => el._id === tag._id)) {
            setActive(true)
        }
    }, [])

    const clickHandler = () => {
        if (activeUrl === tag.url && active) {
            return;
        }

        setActive(!active)
        
        if (!active) {
            dispatch(addSelectedTag(tag))
        } else {
            dispatch(removeSelectedTag(tag._id))
        }
    }

    return (
        <div className={`tag-item no_select ${active ? 'active' : ''}`} onClick={clickHandler}>
            {tag.name}
        </div>
    )
}

TagItem.propTypes = {
    tag: PropTypes.object
}

export default TagItem