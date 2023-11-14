import React, {useEffect, useRef, useState} from 'react';

import PropTypes from 'prop-types'
import Social from '../Social'
import Footer from '../Footer'
import SideCard from './SideCard'
import {convertDateToString} from '@helpers/functions'

import { useSelector } from 'react-redux';
import { trackWindowScroll } from 'react-lazy-load-image-component';

const SideBar = ({ isScrolled, cardsNew, sidebarIsOpen, scrollPosition, setNoBorder }) => {

    let sizes = useSelector((state) => state.sidebar.sizes)
    let ping = useSelector((state) => state.sidebar.ping)
    let [mobileStyle, setMobile] = useState({});
    let [mobileHeight, setHeight] = useState(null);
    let breakpoint = useSelector(state => state.breakpoint.breakpoint);
    // let [scrollSyncFactor, setSyncFactor] = useState(0);
    // const scrollOffset = [180, 136, 136]

    const cards = cardsNew.map(card => ({
        id: card.id,
        header: card.title,
        imageUrl: card.photo && card,
        timestamp: convertDateToString(card.createdAt),
        author: card.employee && card.employee._id ? {
            name: `${card.employee.name} ${card.employee.lastName}`,
            position: `${card.employee.position}`,
            photo: card.employee.photo
        } : null,
        text: card.description,
        url: card.link ? card.link : ''
    }))

    let sidebarRef = useRef(null);

    const updateMobileHeight = (newHeight) => {
        if (breakpoint === 2 && newHeight) {
            setMobile({ height: newHeight, minHeight: newHeight })
        } else {
            setMobile({})
        }
    }
    
    useEffect(() => {
        if (sizes && sizes.length === cards.length) {
            let oddColumn = 0
            let evenColumn = 0
            sizes.map((v, i) => {
                if (i % 2) {
                    oddColumn += v
                } else {
                    evenColumn += v
                }
            })
            const maxHeight = Math.max(oddColumn, evenColumn)
            if (maxHeight) {
                setHeight(maxHeight)
            }
        }
    }, [ping])

    useEffect(() => {
        updateMobileHeight(mobileHeight)
    }, [breakpoint, sidebarIsOpen, mobileHeight]);

    // useEffect(() => {
    //     if (breakpoint < 2) {
    //         if (sidebarIsOpen) {
    //             sidebarRef.current.scrollTop = Math.round(window.pageYOffset * scrollSyncFactor)
    //         }

    //         const scrollSync = () => {
    //             const factor = (sidebarRef.current.scrollHeight - sidebarRef.current.clientHeight)
    //                 / (pageRef.current.scrollHeight - window.innerHeight)

    //             if (sidebarIsOpen) {
    //                 setSyncFactor(factor);
    //                 const newScroll = Math.round(window.pageYOffset * scrollSyncFactor)
    //                 const possibleScroll = sidebarRef.current.scrollHeight - sidebarRef.current.clientHeight - scrollOffset[breakpoint]
    //                 const hCheckSide = possibleScroll - newScroll
    //                 const hCheckMain = pageRef.current.scrollHeight - window.innerHeight - scrollOffset[breakpoint] - window.pageYOffset
                
    //                 if (hCheckSide >= 0) {
    //                     sidebarRef.current.scrollTop = newScroll
    //                 } else {
    //                     if (hCheckMain <= 0) {
    //                         sidebarRef.current.scrollTop = possibleScroll + (-hCheckMain)
    //                     } else {
    //                         sidebarRef.current.scrollTop = possibleScroll
    //                     }
    //                 }
    //             }
    //         }

    //         window.addEventListener('scroll', scrollSync);

    //         return () => {
    //             window.removeEventListener('scroll', scrollSync);
    //         }
    //     }
        

    // }, [scrollSyncFactor, sidebarIsOpen, breakpoint])

    useEffect(() => {

        const scroll = () => {
            if (sidebarRef.current.scrollTop > 0) {
                setNoBorder(false)
            } else {
                setNoBorder(true)
            }
        }

        if (sidebarRef && sidebarIsOpen) {
            sidebarRef.current.addEventListener('scroll', scroll) 

            return () => { 
                if(sidebarRef.current){
                    sidebarRef.current.removeEventListener('scroll', scroll)
                }
            }
        }

    }, [sidebarIsOpen])
    return (
        <React.Fragment>
            <div className={`sidebar-overlay`}></div>
            <div className={
                `sidebar ${!sidebarIsOpen ? "closed" : ""}`
            }>
                {
                    breakpoint < 2 || breakpoint==='max' ? 
                    (
                        <div className={"sidebar__desktop " + `${isScrolled ? "sidebar__desktop--scrolled" : ""}`}>
                            <div className="sidebar_content hide_scrollbar" ref={sidebarRef}>
                                <div className="sidebar_content__cards">
                                    <div className="sidebar_content__cards__wrapper" >
                                        {
                                            cards.map(card => <SideCard
                                                header={card.header}
                                                timestamp={card.timestamp}
                                                imageUrl={card.imageUrl}
                                                author={card.author}
                                                text={card.text}
                                                url={card.url}
                                                key={card.id}
                                            />)
                                        }
                                    </div>
                                </div>

                                <div className={`sidebar_bottom`}>
                                    <div className="sidebar_bottom__container">
                                        <Social vertical={!sidebarIsOpen} />
                                    </div>
                                </div>
                            </div>

                            <div className={`sidebar_bottom-animated ${sidebarIsOpen ? 'sidebar_bottom_hide' : 'sidebar_bottom_show'}`}>
                                <div className="sidebar_bottom__container">
                                    <Social vertical={!sidebarIsOpen} />
                                </div>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="sidebar__mobile" ref={sidebarRef} >
                            <div className="sidebar__mobile__header">
                                поток
                            </div>

                            <div className="sidebar__mobile__cards" style={mobileStyle} >
                                {
                                    cards.map((card, index) =>
                                        <SideCard
                                            header={card.header}
                                            timestamp={card.timestamp}
                                            imageUrl={card.imageUrl}
                                            text={card.text}
                                            author={card.author}
                                            url={card.url}
                                            key={card.id}
                                            myIndex={index}
                                            scrollPosition={scrollPosition}
                                        />)
                                }
                            </div>

                            <div className="sidebar__mobile__footer">
                                <Footer />
                            </div>
                        </div>
                    )
                }
            </div>
        
        </React.Fragment>
    )
}

SideBar.propTypes = {
    isScrolled: PropTypes.bool,
    cardsNew: PropTypes.array.isRequired,
    sidebarIsOpen: PropTypes.bool,
    pageRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Object) })
    ]),
    scrollPosition: PropTypes.any,
    setNoBorder: PropTypes.func
}

export default trackWindowScroll(SideBar)
