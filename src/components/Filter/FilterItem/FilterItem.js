import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedFilter, clearSelectedFilters, removeSelectedFilter } from '@store/tags/tagsAction';
import { logEvent } from '@helpers/metrics';

const FilterItem = ({ filter, bottom, size, subtag, home, initialActive }) => {
    let dispatch = useDispatch()
    const [active, setActive] = useState(initialActive);
    const selectedFilters = useSelector((state) => state.tags.selectedFilters)
    const selectedId = useSelector((state) => state.tags.activeUrl)
    let clSize = ''
    const clBottom = bottom ? 'tag_bottom' : ''
    const alwaysActive = subtag ? 'tag_always_active' : ''

    useEffect(() => {
        if (subtag) {
            dispatch(addSelectedFilter(filter))
        }
    }, [])

    useEffect(() => {
        if (home) {
            if (selectedFilters.length) {
                setActive(false)
            } else {
                setActive(true)
            }
        } else {
            if (selectedFilters.find((el) => el._id === filter._id)) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
    }, [JSON.stringify(selectedFilters)])

    useEffect(() => {
        setActive(initialActive)
    }, [selectedId])

    switch(size) {
        case 'large': 
            clSize = 'tags__tag_large'
        break;

        case 'medium': 
            clSize = 'tags__tag_medium'
        break;

        case 'tiny':
            clSize = 'tags__tag_tiny'
        break;

        default: 
            clSize = 'tags__tag_large'
    }

    const clickHandler = () => {

        if (home) {
            if (!active) {
                dispatch(clearSelectedFilters())
                setActive(true)
            }
            return
        }

        if (alwaysActive) {
            return
        }

        setActive(!active)

        if (!active) {
            logEvent('TagsArticle', {
                Tags: filter.name,
            })
            dispatch(addSelectedFilter(filter))
        } else {
            dispatch(removeSelectedFilter(filter._id))
        }
    }

    return (
        <div className={`tags__tag ${clBottom} ${clSize} ${active ? 'active' : ''} ${alwaysActive}`} onClick={clickHandler}>
            <span>{filter.name}</span>
        </div>)
}

FilterItem.propTypes = {
    bottom: PropTypes.bool,
    size: PropTypes.string,
    subtag: PropTypes.bool,
    filter: PropTypes.object,
    home: PropTypes.bool,
    initialActive: PropTypes.bool,
}

export default FilterItem;