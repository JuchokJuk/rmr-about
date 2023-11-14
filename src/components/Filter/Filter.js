import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FilterItem from './FilterItem';
import { useDispatch, useSelector } from 'react-redux';
import { initArticles } from '@store/cards/cardsAction';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { useRouter } from 'next/router';
import { clearSelectedFilters, pingFilter } from '@store/tags/tagsAction';

const Filter = ({ filters, type = 'article' }) => {
    let dispatch = useDispatch()
    const router = useRouter()
    
    const selectedFilters = useSelector((state) => state.tags.selectedFilters)
    const selectedUrl = useSelector((state) => state.tags.activeUrl)
    const filtersIds = selectedFilters.map(tag => tag._id)
    const selectedFilterId = filtersIds.length ? filtersIds[0] : null
    let subtag = type === 'subtag'

    const filterTags = filters.all ? filters.all.map(item => {
        item['available'] = !!filters.available.find(av => av._id === item._id);
        return item
    }) : []


    useDidUpdateEffect(() => {
        if (type === 'article') {
            dispatch(initArticles(selectedUrl, filtersIds))
            router.push({ pathname: router.route, query: { tag: router.query.tag } }, `${router.query.tag}` ,{ shallow: true })
        }

        dispatch(pingFilter())
    }, [JSON.stringify(selectedFilters)])

    useDidUpdateEffect(() => {
        dispatch(clearSelectedFilters())
    }, [selectedUrl])

    useEffect(() => {
        if (type === 'article' && selectedFilterId) {
            dispatch(initArticles(selectedUrl, filtersIds))
        }
    }, [])

    const tagsList = filterTags.map(item => {
        return (<FilterItem key={item._id} filter={item} size="medium" subtag={subtag} initialActive={selectedFilterId === item._id}/>)
    })

    const homeFilter = {
        name: 'Все',
        available: true,
        _id: 0
    }

    return (
        <div className="home-filter">
            <div className="tags tags_medium">
                {
                    !subtag && <FilterItem home initialActive={selectedFilterId === null} filter={homeFilter} size="medium"/>
                }
                {tagsList}
            </div>
        </div>
    )
}

Filter.propTypes = {
    filters: PropTypes.object,
    type: PropTypes.oneOf([
        'article',
        'subtag',
    ]),
}

export default Filter;