import React, { useEffect } from 'react'
import MenuSvg from '@assets/menu.svg'
import ReactModal from 'react-modal'
import TagsModal from './TagsModal'
import MenuItem from './MenuItem'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedUrl, pingTags, setSelectedTags } from '@store/tags/tagsAction'
import { toggleScrollLock, toggleTagsModal } from '@store/modals/modalsAction'
import { logEvent } from '@helpers/metrics'
import useDidUpdateEffect from '@helpers/useDidUpdateEffect'

const TagsMenu = () => {
    let dispatch = useDispatch()

    const selectedTags = useSelector((state) => state.tags.selectedTags)
    const modalItems = useSelector((state) => state.tags.allTags.data)
    const activeUrl = useSelector((state) => state.tags.activeUrl)
    const showModal = useSelector((state) => state.modals.tags.isOpen)
    let menuItems = selectedTags.length ? selectedTags : []

    useEffect(() => {
        if (typeof (window) !== 'undefined') {
            ReactModal.setAppElement('body')
        }
    }, [])

    useDidUpdateEffect(() => {
        menuItems = selectedTags.length ? selectedTags : []
        logEvent('TagsApply', { Tags: selectedTags })
    }, [JSON.stringify(selectedTags)])

    const handleOpenModal = () => {
        dispatch(toggleScrollLock(true))
        dispatch(toggleTagsModal(true))
        logEvent('TagsMenu')
    }

    const handleCloseModal = (changed) => {
        dispatch(toggleScrollLock(false))
        dispatch(toggleTagsModal(false))
        if (changed) {
            dispatch(setSelectedTags())
            dispatch(pingTags())
        }
    }

    const handleOnClick = (url, event) => {
        if (activeUrl !== url) {
            dispatch(setSelectedUrl(url))
        } else {
            event.preventDefault()
        }
    }

    const menuList = () => {
        return (
            <div className="tags__wrap__list">
                <MenuItem name={'Главное'} active={!activeUrl} onClickHandler={(event) => handleOnClick(null, event)} />
                {
                    menuItems.map(item => {
                        return (<MenuItem key={item._id} name={item.name} link={item.url} active={activeUrl === item.url} onClickHandler={(event) => handleOnClick(item.url, event)} />)
                    })
                }
            </div>
        )
    }

    return (
        <div className="tags">
            <div className="tags__wrap">
                <div className="tags__wrap__list">
                    {
                        menuList()
                    }
                </div>
                <div className="tags__wrap__more">
                    <div className={`tags__wrap__more__button`} onClick={handleOpenModal}>
                        <MenuSvg className="tags__wrap__more__button__menu" />
                    </div>



                    <ReactModal isOpen={showModal}
                        className="tags_modal hide_scrollbar"
                        closeTimeoutMS={320}
                        overlayClassName="tags_modal--overlay">
                        <TagsModal closeFunc={handleCloseModal} tags={modalItems} />
                    </ReactModal>

                </div>
            </div>
        </div>
    )
}

export default TagsMenu