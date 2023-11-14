import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { toggleSearchModal, toggleScrollLock } from '@store/modals/modalsAction'
import { initPopularSearch, setSearchQuery } from '@store/search/searchAction';
import ReactModal from 'react-modal';
import Search from './Search/Search';
import { Router } from 'next/router';

const SearchModal = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof (window) !== 'undefined') {
            ReactModal.setAppElement('body')
        }

        Router.events.on('routeChangeStart', () => {
            closeClickHandler()
        })

        dispatch(initPopularSearch())
    }, [])

    let showModal = useSelector((state) => state.modals.search).isOpen

    const closeClickHandler = () => {
        dispatch(toggleSearchModal(false))
        dispatch(toggleScrollLock(false))
        dispatch(setSearchQuery(''))
    }

    return (     
        <ReactModal isOpen={showModal}
            className="search_modal"
            closeTimeoutMS={300}
            overlayClassName="search_modal--overlay">
            <Search toggleFunc={closeClickHandler}/>
        </ReactModal> 
    )
}



export default SearchModal