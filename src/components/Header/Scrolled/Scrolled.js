import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Link from 'next/link'

import OpenedArrowSVG from '@assets/Sidebar/ArrowOpened.svg'
import ClosedArrowSVG from '@assets/Sidebar/ArrowClosed.svg'
import MobileMenuSVG from '@assets/mobileMenu.svg';
import MobileCrossSVG from '@assets/mobileCross.svg';
import Loupe from "@assets/loupe.svg";

const Scrolled = ({ menus, noBorder, contactClickHandler, sidebarIsOpen, sidebarClickHandler, isScrolled, toggleMobileMenu, mobileMenuIsOpen, searchClickHandler }) => {

    let cls = "";

    if (mobileMenuIsOpen) {
        cls = "header-border-animation--no_border"
    } else if (noBorder) {
        cls = "header-border-animation--no_border"
    }

    return (
        <div className={`header-scrolled-wrapp header-border-animation ${cls} ${!isScrolled ? "hide" : ""}`}>
            <div className="header-border-wrapper" />
            <div className="header-scrolled">
                <div className="header-left-block">
                    <Logo />
                </div>

                <div className="header-content__controls">

                    <div className={"loupe-container"}>
                        <Loupe className="header__callback-loupe" onClick={searchClickHandler} />
                    </div>

                    <div className="header-links header-mobile_hide">
                        {menus.map(menu => {
                            return <Link href={menu.link} key={menu.link}>
                                <a target={menu.target} className={`header-links__link ${menu.active ? 'active_link' : ''}`}>{menu.title}</a>
                            </Link>
                        })}
                        {/* <a className={`header-links__link header-links__link--en`} href={'https://www.redmadrobot.com/'} target="_blank" rel="noreferrer">
                            en
                        </a> */}
                    </div>
                    
                    <div className="header__callback-btn-wrapp header-mobile_hide">
                        <button onClick={contactClickHandler}
                            className="header__callback-btn">Написать нам</button>
                    </div>

                    <div className="header-menu header-mobile_show"
                        onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}>
                        {!mobileMenuIsOpen ? <MobileMenuSVG /> : <MobileCrossSVG />}
                    </div>

                </div>
            </div>
            <div className={`header__sidebar ${!sidebarIsOpen ? "header__sidebar--closed" : "header__sidebar--opened"}`}>
                <div className="header__sidebar__container">
                    <span>поток</span>
                </div>

                <div className={`header__sidebar__arrow__box ${!isScrolled ? "header__arrow__box_hidden" : ""}`}>
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
        </div>
    )
}

Scrolled.propTypes = {
    noBorder: PropTypes.bool,
    menus: PropTypes.array,
    sidebarIsOpen: PropTypes.bool,
    sidebarClickHandler: PropTypes.func,
    mobileMenuIsOpen: PropTypes.bool,
    contactClickHandler: PropTypes.func,
    isScrolled: PropTypes.bool,
    toggleMobileMenu: PropTypes.func,
    searchClickHandler: PropTypes.func,
}


export default Scrolled;