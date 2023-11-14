import {
    showContactModal,
    toggleScrollLock,
    toggleSearchModal,
} from "@store/modals/modalsAction";
import { setContactModalStepMenu } from "@store/contactForm/contactFormAction";
import { changeVisibilityMobileMenu } from "@store/about/aboutAction";
import { setHeaderRef } from "@store/header/headerAction";
import CloseMenu from "@assets/NewAbout/CloseMenu.svg";
import { useBreakpoint } from "@helpers/useBreakpoint";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import ContactModal from "@components/ContactModal";
import MobileMenuSVG from "@assets/mobileMenu.svg";
import SearchModal from "@components/SearchModal";
import MobileMenu from "./MobileMenu/MobileMenu";
import CustomLink from "@helpers/customLink";
import Loupe from "@assets/loupe.svg";
import Logo from "./Logo/Logo";
import "./RHeader.less";
import FakeBg from "../AboutPage/FakeBg/FakeBg";
import HeaderMailing from "@components/HeaderMailing";

import { useRouter } from "next/router";


const RHeaderRed = () => {
    const dispatch = useDispatch();
    const breakpoint = useBreakpoint();

    const statusMobileMenu = useSelector(
        (state) => state.about.visibilityMobileMenu
    );
    const openMobileMenu = () => {
        dispatch(changeVisibilityMobileMenu(true));
    };
    const closeMobileMenu = () => {
        dispatch(changeVisibilityMobileMenu(false));
    };

    // убираем меню по скроллу
    useEffect(() => {
        const closeMenuForScroll = () => {
            dispatch(changeVisibilityMobileMenu(false));
        };
        document.addEventListener("scroll", closeMenuForScroll);
        return () => {
            document.removeEventListener("scroll", closeMenuForScroll);
        };
    }, []);

    //блокируем скролл при открытом меню
    /*  useEffect(() => {
        if (statusMobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [statusMobileMenu]); */

    const contactModalIsOpen = useSelector(
        (state) => state.modals.contact.isOpen
    );
    const searchModalIsOpen = useSelector(
        (state) => state.modals.search.isOpen
    );

    const headerRef = useRef();

    useEffect(() => {
        dispatch(setHeaderRef(headerRef));
    }, []);

    const contactClickHandler = () => {
        dispatch(showContactModal(!contactModalIsOpen));
        dispatch(toggleScrollLock(true));
        dispatch(setContactModalStepMenu());
    };
    const searchClickHandler = () => {
        dispatch(toggleSearchModal(!searchModalIsOpen));
        dispatch(toggleScrollLock(true));
    };
    const router = useRouter();
    const [page, setPage] = useState();
    useEffect(() => {
        setPage(router.asPath);
    }, [router]);

    return (
        <div
            className={
                statusMobileMenu
                    ? "r-header r-header-new r-header--mobile"
                    : "r-header"
            }
            ref={headerRef}
            id="r-header"
        >

            {page != "/about" ? <HeaderMailing layout2 /> : ""}


            <div className="r-header__content">
                <Logo />

                <div className="r-header__control control">
                    <Loupe
                        className="control__search"
                        onClick={searchClickHandler}
                    />
                    {breakpoint <= 2 || breakpoint === "max" ? (
                        <>
                            <div className="control__nav">
                                <CustomLink href="/about">
                                    <a className="control__link">Компания</a>
                                </CustomLink>

                                {/*  <CustomLink href="#">
                                    <a className="control__link">Видение</a>
                                </CustomLink>*/}
                                <CustomLink href="https://iot.redmadrobot.ru/">
                                    <a target="_blank" className="control__link">IoT</a>
                                </CustomLink> 
                                <CustomLink href="https://fintech.redmadrobot.ru/">
                                    <a target="_blank" className="control__link">Fintech hub</a>
                                </CustomLink> 
                                <CustomLink href="/career">
                                    <a className="control__link">Карьера</a>
                                </CustomLink>

                                <CustomLink href="/contacts">
                                    <a className="control__link">Контакты</a>
                                </CustomLink>
                            </div>
                            <div
                                className="control__btn"
                                onClick={contactClickHandler}
                            >
                                Написать нам
                            </div>
                        </>
                    ) : statusMobileMenu ? (
                        <CloseMenu
                            className="control__mobileClose"
                            onClick={closeMobileMenu}
                        />
                    ) : (
                        <MobileMenuSVG
                            className="control__mobile"
                            onClick={openMobileMenu}
                        />
                    )}
                </div>

                <FakeBg />
            </div>
            <SearchModal />
            <ContactModal />
            <MobileMenu show={statusMobileMenu} />
        </div>
    );
};
export default RHeaderRed;
