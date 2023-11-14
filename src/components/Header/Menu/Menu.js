import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { useSelector } from 'react-redux';

const Menu = ({ menus, contactClickHandler, mobileMenuIsOpen, toggleMobileMenu }) => {
    const showEmailingHeader = useSelector((state) => state.modals.emailingHeader.display)

    return (
        <React.Fragment>
            <div className={`header-menu__mobile ${mobileMenuIsOpen ? `${showEmailingHeader ? 'header-menu_open header-menu_open--mailing' : 'header-menu_open'}` : 'header-menu_close'}`}>

                <div className={`header-menu__content`}>
                    <div className="header-mobile__links header-mobile_show">
                        {menus.map(menu => {
                            return <Link href={menu.link} key={menu.link}>
                                <a target={menu.target} className="header-links__link" onClick={() => toggleMobileMenu(!mobileMenuIsOpen)}>{menu.title}</a>
                            </Link>
                        })}
                    </div>

                    <div className="header__callback-btn-wrapp">
                        <button onClick={contactClickHandler}
                            className="header__callback-btn">Написать нам</button>

                       {/*  <a className={`header-links__link header-links__link--en`} href={'https://www.redmadrobot.com/'} target="_blank" rel="noreferrer">
                            en
                        </a> */}
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

Menu.propTypes = {
    menus: PropTypes.array,
    contactClickHandler: PropTypes.func,
    isScrolled: PropTypes.bool,
    toggleMobileMenu: PropTypes.func,
    mobileMenuIsOpen: PropTypes.bool
}

export default Menu;