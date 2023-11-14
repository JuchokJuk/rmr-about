import React from "react"

import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import {
    showContactModal,
    toggleScrollLock,
    toggleMenu,
    toggleSearchModal,
} from "@store/modals/modalsAction"
import { showSidebar } from "@store/sidebar/sidebarAction"
import ContactModal from "@components/ContactModal"
import { smallScreen } from "@helpers/functions"

import Fixed from "./Fixed"
import Scrolled from "./Scrolled"
import Menu from "./Menu"
import { logEvent } from "@helpers/metrics"
import useLocalStorage from "@helpers/useLocalStorage"
import SearchModal from "@components/SearchModal"
import { setContactModalStepMenu } from "@store/contactForm/contactFormAction"
import HeaderMailing from "@components/HeaderMailing"

const Header = ({
    noBorder,
    isScrolled,
    sidebarIsOpen,
    mobileMenuIsOpen,
    headerRef,
}) => {
    let dispatch = useDispatch()

    let contactModalIsOpen = useSelector(
        (state) => state.modals.contact.isOpen
    )
    let searchModalIsOpen = useSelector((state) => state.modals.search.isOpen)
    const currentUrl = useSelector((state) => state.tags.activeUrl)
    const [, setSidebarLocal] = useLocalStorage("sidebar", null)

    let menus = [
        { link: "/about", title: "Компания", active: currentUrl === "about", target: '_self' },
        { link: "https://iot.redmadrobot.ru/", title: "IoT", active: false, target: '_blank' },
        { link: "https://fintech.redmadrobot.ru/", title: "Fintech hub", active: false, target: '_blank' },
        { link: "/career", title: "Карьера", active: currentUrl === "career", target: '_self' },
        {
            link: "/contacts",
            title: "Контакты",
            active: currentUrl === "contacts",
            target: '_self',
        },
    ]

    const contactClickHandler = () => {
        logEvent("ContactUsMain")
        dispatch(showContactModal(!contactModalIsOpen))
        dispatch(toggleScrollLock(true))
        dispatch(setContactModalStepMenu())
    }

    const searchClickHandler = () => {
        dispatch(toggleSearchModal(!searchModalIsOpen))
        dispatch(toggleScrollLock(true))
    }

    const sidebarClickHandler = () => {
        if (smallScreen()) {
            if (!sidebarIsOpen) {
                dispatch(toggleScrollLock(true))
            } else {
                dispatch(toggleScrollLock(false))
            }
        }
        logEvent("FlowSwipe")
        dispatch(showSidebar(!sidebarIsOpen))
        setSidebarLocal(!sidebarIsOpen)
    }

    const toggleMobileMenu = (state) => {
        dispatch(toggleMenu(state))
    }

    return (
        <div
            className={`header-wrapp ${isScrolled ? "sticky" : ""}`}
            ref={headerRef}
        >
            <HeaderMailing />
            {headerRef ? (
                <React.Fragment>
                    <Fixed
                        menus={menus}
                        sidebarClickHandler={sidebarClickHandler}
                        sidebarIsOpen={sidebarIsOpen}
                        contactClickHandler={contactClickHandler}
                        mobileMenuIsOpen={mobileMenuIsOpen}
                        toggleMobileMenu={toggleMobileMenu}
                        isScrolled={isScrolled}
                        searchClickHandler={searchClickHandler}
                    />

                    <Scrolled
                        menus={menus}
                        sidebarClickHandler={sidebarClickHandler}
                        sidebarIsOpen={sidebarIsOpen}
                        contactClickHandler={contactClickHandler}
                        mobileMenuIsOpen={mobileMenuIsOpen}
                        toggleMobileMenu={toggleMobileMenu}
                        isScrolled={isScrolled}
                        noBorder={noBorder}
                        searchClickHandler={searchClickHandler}
                    />

                    <ContactModal />
                    <SearchModal />

                    <Menu
                        menus={menus}
                        contactClickHandler={contactClickHandler}
                        mobileMenuIsOpen={mobileMenuIsOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </React.Fragment>
            ) : null}
        </div>
    )
}

Header.propTypes = {
    noBorder: PropTypes.bool,
    isScrolled: PropTypes.bool,
    sidebarIsOpen: PropTypes.bool,
    headerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
    ]),
    mobileMenuIsOpen: PropTypes.bool,
}

export default Header
