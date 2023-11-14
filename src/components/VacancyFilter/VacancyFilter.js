import React from 'react';
import PropTypes from 'prop-types';

import VacancyFilterItem from './VacancyFilterItem';
import { useDispatch, useSelector } from 'react-redux';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { filterCards } from '@helpers/Adapters/CareerAdapter';
import { setFilteredCards } from '@store/career/careerAction';

const VacancyFilter = ({ tags }) => {
    let dispatch = useDispatch()
    const selectedFilters = useSelector((state) => state.career.filteredData.selectedFilters)
    const filtersIdsFirst = selectedFilters.firstLevel.map(tag => tag._id)
    const filtersIdsSecond = selectedFilters.secondLevel.map(tag => tag._id)

    const cards = useSelector(state => state.career.mainData.cards)
    const filters = useSelector(state => state.career.filters)

    const citiesList = tags.firstLevel.map(item => {
        return (<VacancyFilterItem key={item._id} filter={item} initialActive={false} level={0}/>)
    })

    const specsList = tags.secondLevel.map(item => {
        return (<VacancyFilterItem key={item._id} filter={item} initialActive={false} level={1}/>)
    })

    useDidUpdateEffect(() => {
        dispatch(setFilteredCards(filterCards(cards, selectedFilters, filters)))
    }, [JSON.stringify(selectedFilters.firstLevel), JSON.stringify(selectedFilters.secondLevel)])


    const homeFilter = {
        name: 'Все города',
        _id: 0
    }

    const homeFilterDirection = {
        name: 'Все направления',
        _id: 0
    }

    return (
        <div className="home-filter">
            <div className="vacancy-tags">
                {
                    <VacancyFilterItem home initialActive={filtersIdsFirst.length === 0} filter={homeFilter} level={0} />
                }
                {citiesList}
            </div>
            <div className="vacancy-tags vacancy-tags__bottom">
                {
                    <VacancyFilterItem home initialActive={filtersIdsSecond.length === 0} filter={homeFilterDirection} level={1} />
                }
                {specsList}
            </div>
        </div>
    )
}

VacancyFilter.propTypes = {
    tags: PropTypes.object,
}

export default VacancyFilter;