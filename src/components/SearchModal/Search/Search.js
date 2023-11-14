import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import CrossSvg from '@assets/Common/cross.svg'
import HeartSVG from '@assets/Search/heartSearch.svg';
import LightningSVG from '@assets/Search/lightningSearch.svg';
import LayoutGrid from '@components/Styles/LayoutGrid';
import { useDispatch, useSelector } from 'react-redux';
import Tags from '@components/Styles/Tags';
import SearchInput from '@components/Inputs/SearchInput';
import NoResults from "@components/SearchModal/Search/NoResults";
import DropList from '@components/SearchModal/Search/DropList';
import {setSearchQuery, getFreshResults, getPopularResults, getSearchResults} from '@store/search/searchAction';
import useDebounce from '@helpers/useDebounce';

const Search = ({ toggleFunc }) => {
    let dispatch = useDispatch()

    const searchStates = {
        default: 'default',
        no_data: 'no_data',
        results: 'results'
    }

    const tagsByUrl = useSelector((state) => state.tags.allTags.byUrl)
    const cards = useSelector((state) => state.search.initialData.cards)
    const tags = useSelector((state) => state.search.initialData.tags)
    const queries = useSelector((state) => state.search.initialData.queries)
    
    const searchQuery = useSelector((state) => state.search.searchQuery)
    const cardsSearched = useSelector((state) => state.search.searchData.cards)
    const cardsTotal = useSelector((state) => state.search.searchData.cardsTotal)
    const searchIsPending = useSelector((state) => state.search.searchData.isPending)
    const searchIsRejected = useSelector((state) => state.search.searchData.isRejected)

    const dropCardsTotal = useSelector((state) => state.search.dropList.cardsTotal)
    const dropTagsTotal = useSelector((state) => state.search.dropList.tagsTotal)
    const dropStamp = useSelector((state) => state.search.dropList.stamp)

    const [searched, setSearched] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [droplistOpen, setDrop] = useState(false)
    const [filter, setFilter] = useState('')
    const [searchState, setSearchState] = useState(searchStates['default'])
    const [isEnterPressed, setEnterPressed] = useState(false);

    const debouncedSearchState = useDebounce(searchState, 150);

    useEffect(() => {
        setFilter('');
    }, [searchQuery])

    useEffect(() => {
        if (cardsTotal ) {
            setEmpty(false)
        } else {
            setEmpty(true)
        }
    }, [cardsTotal])

    useEffect(() => {
        if ((dropCardsTotal || dropTagsTotal) && !filter && !isEnterPressed) {
            setDrop(true)
        } else {
            setDrop(false)
        }
    }, [dropCardsTotal, dropTagsTotal, dropStamp])

    useEffect(() => {
        
        if (!searched) {
            setDrop(false)
        }

        if (searchIsRejected) {
            setSearchState(searchStates['default'])
            return
        }

        if (!searched && !searchIsPending) { // Starting state
            setSearchState(searchStates['default'])
        } else if (searched && searchIsPending) { // Waiting for response (still default for us)
            // setSearchState(searchStates['default']) do nothing

        } else if (searched && !searchIsPending && empty) { // No results
            setSearchState(searchStates['no_data'])
        } else if (searched && !searchIsPending && !empty) { // Show results
            setSearchState(searchStates['results'])
        }

    }, [searched, empty, searchIsPending, searchIsRejected])

    const onClickLink = (i) => {
        dispatch(setSearchQuery(queries[i].name))
    }

    const onClickFresh = () => {
        if (filter !== 'fresh') {
            setFilter('fresh')
            dispatch(getFreshResults(searchQuery, Date.now()))
        } else {
            setFilter('')
            dispatch (getSearchResults(searchQuery, Date.now()))
        }
    }

    const onClickPopular = () => {
        if (filter !== 'popular') {
            setFilter('popular')
            dispatch(getPopularResults(searchQuery, Date.now()))
        } else {
            setFilter('')
            dispatch (getSearchResults(searchQuery, Date.now()))
        }
    }

    return (
        <div className="search">
            <div className={`droplist-overlay ${droplistOpen ? 'droplist-overlay--open' : ''}`} onClick={() => setDrop(false)}>
            </div>
            
            <div className="search__button" onClick={toggleFunc}>
                <CrossSvg className="cross" />
            </div>

            <div className={`search__input ${droplistOpen ? 'search__input--droplist' : ''}`}>
                <SearchInput setSearched={setSearched} setEmpty={setEmpty} setFilter={setFilter} setDrop={setDrop} setEnterPressed={setEnterPressed} />
                <DropList isOpen={droplistOpen}/>
            </div>

            {
                (debouncedSearchState == searchStates.no_data) ? 
                <div className={'search__content'}>
                    <NoResults />
                </div> : null
            }

            {
                (debouncedSearchState == searchStates.default) ?
                <div className={`search__content`}>
                    <div className="search__content__grid">
                        <LayoutGrid cards={cards} className={"search-grid search-grid--small"} />
                    </div>

                    <div className="search__content__menu">
                        <div className="search__content__menu__links">
                            {
                                queries.map((link, i) => {
                                    return <div onClick={() => onClickLink(i)} className="search__content__menu__links__link" key={link._id}>{link.name}</div>
                                })
                            }
                        </div>
                        <div className="search__content__menu__tags">
                            <Tags tags={tags} size={'search'} tagsByUrl={tagsByUrl} />
                        </div>
                    </div>
                </div> : null
            }

            {
                (debouncedSearchState == searchStates.results) ?
                <div className={`search__content search__content--column`}>
                    <div className="search__content__filters">
                        <div onClick={onClickFresh} className={`search__content__filters__filter ${filter === 'fresh' ? 'filter__chosen' : ''}`}>
                            <LightningSVG />
                            <span>Свежие</span>
                        </div>

                        <div onClick={onClickPopular} className={`search__content__filters__filter ${filter === 'popular' ? 'filter__chosen' : ''}`}>
                            <HeartSVG />
                            <span>Популярные</span>
                        </div>
                    </div>

                    <div className="search__content__grid">
                        <LayoutGrid cards={cardsSearched} className={"search-grid"} />
                    </div> 
                </div> : null
            }
        </div>
    )
}

Search.propTypes = {
    toggleFunc: PropTypes.func.isRequired,
}

export default Search