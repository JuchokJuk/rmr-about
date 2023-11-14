import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CrossSVG from '@assets/Common/crossSmall.svg'
import useDebounce from '@helpers/useDebounce';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { useDispatch, useSelector } from 'react-redux';
import { getDroplistData, getSearchResults } from '@store/search/searchAction';
import { setSearchQuery } from "@store/search/searchAction";
import { getNewId, sendRequest } from './searchStatisticsAPI';

let searchId;

(async () => {
    searchId = await getNewId();
})();

const SearchInput = ({ setSearched, setFilter, setDrop, setEnterPressed }) => {

    let dispatch = useDispatch()

    const searchQuery = useSelector(state => state.search.searchQuery)

    const [isDirty, setDirty] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 250);

    useDidUpdateEffect(() => {
        setSearchTerm(searchQuery)
        if (searchQuery) {
            setDirty(true)
        }
    }, [searchQuery])

    const localChange = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value) {
            setDirty(true)
        } else {
            setDirty(false)
        }
    }

    const clearInput = () => {
        setSearchTerm('')
        setDirty(false)
        setSearched(false)
        dispatch(setSearchQuery(''))
    }

    const forceSearch = () => {
        if (searchTerm) {
            setSearched(true)
            setDrop(false)
            setFilter('')
            dispatch(setSearchQuery(searchTerm))
            dispatch(getSearchResults(searchTerm, Date.now()))
        }
    }

    const keyDown = (e) => {
        if (e.key === 'Enter' && searchTerm) {
            setEnterPressed(true)
            forceSearch()
            setTimeout(() => {
                setEnterPressed(false)
            }, 250)
        }
    }

    useDidUpdateEffect(
        () => {
            if (debouncedSearchTerm) {
                setSearched(true)
                dispatch(setSearchQuery(debouncedSearchTerm))
                dispatch(getDroplistData(debouncedSearchTerm, Date.now()))
                // dispatch(getSearchResults(debouncedSearchTerm, Date.now()))
            } else {
                setSearched(false)
            }
        },
        [debouncedSearchTerm]
    );

    useEffect(async () => {
        sendRequest(searchId, searchTerm);
    }, [searchTerm])

    return (
        <div className="search-input-wrap">
            <input
                className={`search-input ${isDirty ? 'dirty' : ''}`}
                name={"search"}
                inputMode={"text"}
                onChange={localChange}
                value={searchTerm}
                onKeyDown={keyDown}
                placeholder={"Поиск по сайту"}
                autoComplete="off"
            />
            <div className={`input-controls ${!isDirty ? 'input-controls--hidden' : ''}`}>
                <div className="input-controls__clear" onClick={() => clearInput()}>
                    <CrossSVG />
                </div>

                <div className="input-controls__submit" onClick={() => forceSearch()}>
                    Найти
                </div>
            </div>
        </div>
    )
}

SearchInput.propTypes = {
    setSearched: PropTypes.func,
    setFilter: PropTypes.func,
    setDrop: PropTypes.func,
    setEnterPressed: PropTypes.func,
}

export default SearchInput
