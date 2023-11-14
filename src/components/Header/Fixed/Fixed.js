import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo'
import Link from 'next/link'

import OpenedArrowSVG from '@assets/Sidebar/ArrowOpened.svg'
import ClosedArrowSVG from '@assets/Sidebar/ArrowClosed.svg'
import MobileMenuSVG from '@assets/mobileMenu.svg';
import MobileCrossSVG from '@assets/mobileCross.svg';
import Loupe from '@assets/loupe.svg'

const Fixed = ({ menus, contactClickHandler, sidebarIsOpen, mobileMenuIsOpen, sidebarClickHandler, toggleMobileMenu, searchClickHandler }) => {

    return (<div className={`header-fixed`}>
        <div className="header">
            <div className="grid-container header-fixed-animation" >
                <div className="grid-row">
                    <div className="grid-col-6 inline-flex">

                        <div className="header-left-block">
                            <Logo />
                        </div>

                        <div className="header-content__controls header-mobile_hide">

                            <div className="header-links">
                                <div className={"loupe-container"}>
                                    <Loupe className="header__callback-loupe" onClick={searchClickHandler} />
                                </div>

                                {menus.map(menu => {
                                    return <Link href={menu.link} key={menu.link}>
                                        <a target={menu.target} className={`header-links__link ${ menu.active ? 'active_link' : ''}`}>{menu.title}</a>
                                    </Link>
                                })}

                                {/* <a className={`header-links__link header-links__link--en`} href={'https://www.redmadrobot.com/'} target="_blank" rel="noreferrer">
                                    en
                                </a> */}
                            </div>

                            <button onClick={contactClickHandler}
                                className="header__callback-btn">Написать нам</button>
                        </div>

                        <div className="header-menu header-mobile_show"
                            onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}>
                            {!mobileMenuIsOpen ? <MobileMenuSVG /> : <MobileCrossSVG />}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`header__sidebar ${!sidebarIsOpen ? "header__sidebar--closed" : "header__sidebar--opened"}`}>
                <div className="header__sidebar__container header-fixed-animation" >
                    <span>поток</span>
                </div>
            </div>

            <div className={`header__sidebar__arrow__box ${!sidebarIsOpen ?
                "header__sidebar__arrow__box--closed" :
                "header__sidebar__arrow__box--opened"}`}>

                <div className={`arrow-open ${sidebarIsOpen ?
                    "header__sidebar__container__arrow--opened" :
                    "header__sidebar__container__arrow--closed"}`} >

                    <OpenedArrowSVG onClick={sidebarClickHandler} />
                </div>

                <div className={`arrow-close ${!sidebarIsOpen ?
                    "header__sidebar__container__arrow--opened" :
                    "header__sidebar__container__arrow--closed"}`}>

                    <ClosedArrowSVG onClick={sidebarClickHandler} />
                </div>

            </div>

        </div>
    </div>)
}

Fixed.propTypes = {
    menus: PropTypes.array,
    sidebarIsOpen: PropTypes.bool,
    sidebarClickHandler: PropTypes.func,
    mobileMenuIsOpen: PropTypes.bool,
    contactClickHandler: PropTypes.func,
    toggleMobileMenu: PropTypes.func,
    searchClickHandler: PropTypes.func
}

export default Fixed;