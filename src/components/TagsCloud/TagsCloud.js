import React from 'react'
import MenuSvg from '@assets/menu.svg'
import { useDispatch } from 'react-redux';
import { toggleTagsModal } from '@store/modals/modalsAction';


const TagCloud = () => {
    let dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(toggleTagsModal(true))
    }

    return(
        <div className="cloud">
            <div className="cloud__content">
                <div className="cloud__content__button" onClick={handleOpenModal}>
                    <MenuSvg className="cloud__content__button__menu"/>
                </div>
                <div className="cloud__content__text">
                    Нам кажется самое время отобрать нужные вам <span className="tag">теги</span> и настроить ленту под себя
                </div>
            </div>
            
        </div>
    )
}

export default TagCloud