import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import TagItem from './TagItem'
import CrossSvg from '@assets/Common/cross.svg'
import TikSvg from '@assets/Common/tik.svg'
import { useDispatch, useSelector } from 'react-redux';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import useOnClickOutside from '@helpers/useOnClickOutside';
import { initTagsBuffer } from '@store/tags/tagsAction';

const TagsModal = ({ closeFunc, tags }) => {
    let dispatch = useDispatch()
    const [changed, setChanged] = useState(false)
    const [init, setInit] = useState(true)
    const ref = useRef()

    const selectedBuffer = useSelector((state) => state.tags.selectedBuffer)
    const selectedTags = useSelector((state) => state.tags.selectedTags)
    const sidebarIsOpen = useSelector((state) => state.sidebar.isOpen)

    useEffect(() => {
        // Т.к. DidUpdate не сработает при открытии на пустом массиве, проставляем init 
        if (selectedTags.length === 0) {
            setInit(false)
        }
        // При иницализации буфера без значния туда откопируется selectedTags
        dispatch(initTagsBuffer())
    }, [])

    useDidUpdateEffect(() => {
        if (!init) {
            setChanged(true)
        } else {
            setInit(false)
        }
    }, [JSON.stringify(selectedBuffer)])

    useOnClickOutside(ref, () => closeFunc(changed))

    return (
        <div ref={ref} className={`tags-modal__content--overlay hide_scrollbar ${sidebarIsOpen ? 'sidebar_opened' : 'sidebar_closed'}`}>
            <div className="tags-modal__content">
                <div className={`tags-modal__content__button ${changed ? 'check_completed' : ''}`} 
                    onClick={() => closeFunc(changed)}>
                    {
                        changed ? <TikSvg className="tags-modal__content__button--cross" /> :
                            <CrossSvg className="tags-modal__content__button--cross" />
                    }
                </div>

                <div className="tags-modal__content__list">
                    {
                        tags.map(tag => {
                            return (<TagItem key={tag._id} tag={tag} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TagsModal 

TagsModal.propTypes = {
    closeFunc: PropTypes.func,
    tags: PropTypes.array
};