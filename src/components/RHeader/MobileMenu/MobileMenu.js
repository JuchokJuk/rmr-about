import { showContactModal, toggleScrollLock } from "@store/modals/modalsAction";
import { setContactModalStepMenu } from "@store/contactForm/contactFormAction";
import { useDispatch, useSelector } from "react-redux";
import CustomLink from "@helpers/customLink";
import "./MobileMenu.less";
import FakeBg from "@components/AboutPage/FakeBg/FakeBg";
import { useRouter } from "next/router";

const MobileMenu = ({ show }) => {
    const contactModalIsOpen = useSelector(
        (state) => state.modals.contact.isOpen
    );

    const dispatch = useDispatch();
    const contactClickHandler = () => {
        dispatch(showContactModal(!contactModalIsOpen));
        dispatch(toggleScrollLock(true));
        dispatch(setContactModalStepMenu());
    };
    const mailingHeader = useSelector(
        (state) => state.modals.emailingHeader.display
    );
    const path = useRouter().asPath;

    return (
        <div
            style={{ top: mailingHeader && path != "/about" ? 120 : 60 }}
            className={show ? "mobile-menu mobile-menu--active" : "mobile-menu"}
        >
            <CustomLink href="/about">
                <a className="mobile-menu__link">Компания</a>
            </CustomLink>
            <CustomLink href="https://iot.redmadrobot.ru/">
                <a target="_blank" className="mobile-menu__link">
                    IoT
                </a>
            </CustomLink>
            <CustomLink href="https://fintech.redmadrobot.ru/">
                <a target="_blank" className="mobile-menu__link">
                    Fintech hub
                </a>
            </CustomLink>
            <CustomLink href="/career">
                <a className="mobile-menu__link">Карьера</a>
            </CustomLink>
            <CustomLink href="/contacts">
                <a className="mobile-menu__link">Контакты</a>
            </CustomLink>
            <div
                className="mobile-menu__btn"
                onClick={() => contactClickHandler()}
            >
                Написать нам
            </div>
            <FakeBg />
        </div>
    );
};
export default MobileMenu;
