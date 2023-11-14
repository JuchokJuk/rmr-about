import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { smallScreen, isOnTop } from "@helpers/functions"
import Header from "@components/Header"
import SideBar from "@components/SideBar"
import Footer from "@components/Footer"
import { showSidebar } from "@store/sidebar/sidebarAction"
import { setBreakpoint } from "@store/breakpoint/breakpointAction"
import { general } from "@store/constant"
import { useBreakpoint } from "@helpers/useBreakpoint"
import useDidUpdateEffect from "@helpers/useDidUpdateEffect"
import useLocalStorage from "@helpers/useLocalStorage"
import { initTagsBuffer, setSelectedTags } from "@store/tags/tagsAction"
import GdprPopup from "@components/GdprPopup"
import { toggleGdprModal, toggleMenu } from "@store/modals/modalsAction"
import { toggleStateAdBlock } from "@store/forms/formsAction"


const Layout = (props) => {
    let dispatch = useDispatch()
    let breakpoint = useBreakpoint()
    let pageRef = useRef(null)
    let headerRef = useRef(null)
    const [isScrolled, setScrolled] = useState(false)
    const [noBorder, setNoBorder] = useState(true)
    const sidebarIsOpen = useSelector((state) => state.sidebar.isOpen)
    const wasDispatched = useSelector((state) => state.sidebar.wasDispatched)
    const sidebarCards = useSelector((state) => state.sidebar.cards)
    const toggleScroll = useSelector((state) => state.modals.removeScroll)
    const selectedTagsPing = useSelector((state) => state.tags.selectedTagsPing)
    const selectedTags = useSelector((state) => state.tags.selectedTags)
    const allTags = useSelector((state) => state.tags.allTags.data)
    const mobileMenuIsOpen = useSelector((state) => state.modals.mobileMenu.isOpen)
    const [storageTags, setLocalStorageTags] = useLocalStorage("selectedTags", [])
    const [storageAllTags, setAllTagsLocal] = useLocalStorage("allTags", [])
    const [gdpr, setGdpr] = useLocalStorage("rmrgdprshow", 2)
    const MODAL_OPEN_CLASS = general.MODAL_OPEN_CLASS
    const showEmailingHeader = useSelector((state) => state.modals.emailingHeader.display)

    const initStorageTags = () => {
        setAllTagsLocal(allTags)

        if (storageTags.length) {
            const refined = allTags.filter((allTag) => {
                const isFiltered = storageTags.some((tag) => allTag._id === tag._id)
                const isNew = allTag.isDefault && !storageAllTags.some((tag) => allTag._id === tag._id)
                return isFiltered || isNew
            })

            if (refined.length) {
                setLocalStorageTags(refined)
                dispatch(initTagsBuffer(refined))
                dispatch(setSelectedTags())
            }
        }
    }

    const initSidebar = () => {
        if (!smallScreen()) {
            // Local storage logic was here
            if (!wasDispatched) {
                dispatch(showSidebar(true))
            }
        } else {
            dispatch(showSidebar(false))
        }
    }

    const handleScroll = () => {
        if (smallScreen()) {
            setScrolled(true)
            if (window.pageYOffset <= 0) {
                setNoBorder(true)
            } else {
                setNoBorder(false)
            }
        } else {
            setNoBorder(false)
            if (window.pageYOffset <= 0) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }
    }

    useEffect(() => {
        initStorageTags()

        initSidebar()

        if (gdpr) {
            dispatch(toggleGdprModal(true))
            setGdpr(1)
        }

        window.addEventListener("scroll", handleScroll)

        if (isOnTop()) {
            setScrolled(true)
            setNoBorder(false)
        }

        if (smallScreen()) {
            setScrolled(true)
        }

        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    useEffect(() => {
        dispatch(setBreakpoint(breakpoint))
        if (mobileMenuIsOpen && breakpoint < 3) dispatch(toggleMenu(!mobileMenuIsOpen))
    }, [breakpoint])

    useEffect(() => {
        if (headerRef) {
            headerRef.current.style = "display: flex"
        }
    }, [headerRef])

    useDidUpdateEffect(() => {
        if (toggleScroll) {
            document.body.classList.add(MODAL_OPEN_CLASS)
            document.documentElement.classList.add(MODAL_OPEN_CLASS)
        } else {
            document.body.classList.remove(MODAL_OPEN_CLASS)
            document.documentElement.classList.remove(MODAL_OPEN_CLASS)
        }
    }, [toggleScroll])

    useDidUpdateEffect(() => {
        setAllTagsLocal(allTags)
        setLocalStorageTags(selectedTags)
    }, [selectedTagsPing])

    //проверка наличия adBlock
    useEffect(() => {
        const detect = document.querySelector("#detect")
        let getProperty = window.getComputedStyle(detect).getPropertyValue("display")
        getProperty === "none" ? dispatch(toggleStateAdBlock(true)) : dispatch(toggleStateAdBlock(false))
    }, [])

    return (
        <>
            <div id="detect" className="ad ads adsbox ad-placement doubleclick ad-placeholder ad-badge"></div>
            <div className="page">
                <div
                    className={`header-menu__overlay ${
                        mobileMenuIsOpen || sidebarIsOpen ? "header-menu__overlay_open" : "header-menu__overlay_close"
                    }`}
                />
                <Header
                    isScrolled={isScrolled}
                    noBorder={noBorder}
                    sidebarIsOpen={sidebarIsOpen}
                    mobileMenuIsOpen={mobileMenuIsOpen}
                    headerRef={headerRef}
                />

                <div className={showEmailingHeader ? "page__body page__bodyNew" : "page__body"} ref={pageRef}>
                    <div
                        className={
                            "page__body__content " +
                            `${!sidebarIsOpen ? "page__body__content--closed " : ""}` +
                            `${isScrolled ? "page__body__content--scrolled " : ""}`
                        }>
                        <div className="page__body__content__main">{props.children}</div>

                        <Footer />
                    </div>

                    <div className="page__body__sidebar">
                        <SideBar
                            isScrolled={isScrolled}
                            cardsNew={sidebarCards ? sidebarCards : []}
                            pageRef={pageRef}
                            sidebarIsOpen={sidebarIsOpen}
                            setNoBorder={setNoBorder}
                        />
                    </div>
                </div>
                <GdprPopup />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout
