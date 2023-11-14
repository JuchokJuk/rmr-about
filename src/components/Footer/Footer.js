import Link from 'next/link';
import React, { useState } from 'react';
import Social from '../Social'
import SheverevSVG from '@assets/sheverev.svg';
import InfinitySVG from '@assets/infinity.svg';
import { logEvent } from '@helpers/metrics'
import Router from 'next/router'



const Footer = () => {

    const [isLoading, setLoading] = useState(false);

    
    const promoClick = () => {
        window.open("https://www.sheverev.com/","_blank")
    }

    const phoneClick = () => {
        logEvent('PhoneClickFooter')
    }

    const emailClick = () => {
        logEvent('EmailClickFooter', { 
            Email: "hello@redmadrobot.com" 
        })
    }

    Router.events.on('routeChangeStart', () => {
        setLoading(true)
    })
    Router.events.on('routeChangeComplete', () => {
        setLoading(false)
    })
    Router.events.on('routeChangeError', () => {
        setLoading(false)
    })

    return (
        <div className={`footer ${isLoading ? 'loading' : ''}`}>
            <div className='footer__container'>

                <div className="footer__container__content footer__container__content--social">
                    <Social />
                </div>

                <div className='footer__container--wrap' >
                    <div className="footer__container--wrap--inner">
                        <div className="footer__container__content footer__container__content--robots">
                            <div className="footer__container__content__robot">
                                Сделано роботами для людей
                            </div>
                            <div className="footer__container__content__privacy">
                                <Link href="/privacy">
                                    <a>Политика обработки персональных данных</a>
                                </Link>
                                <br/>
                                
                            </div>
                            <div className="footer__container__content__privacy">
                                По вопросам персональных данных и подписок пишите <a href="mailto:marketing@redmadrobot.com">marketing@redmadrobot.com</a>
                            </div>

                            
                            <div className="footer__container__content__copyright">
                                © red_mad_robot, 2008 — <span className="footer__infinity"><InfinitySVG /></span>
                            </div>
                        </div>

                        <div className="footer__container__content footer__container__content--links">
                            <div>
                            <Link href="/about">
                                <a className="footer__container__content__link">Компания</a>
                            </Link>
                            <Link href="/career">
                                <a className="footer__container__content__link">Карьера</a>
                            </Link>
                            <Link href="/contacts">
                                <a className="footer__container__content__link">Контакты</a>
                            </Link>
                            </div>
                            <div>
                            <Link href="https://iot.redmadrobot.ru/">
                                <a target="_blank" className="footer__container__content__link">IoT</a>
                            </Link>
                            <Link href="https://fintech.redmadrobot.ru/">
                                <a target="_blank" className="footer__container__content__link">Fintech hub</a>
                            </Link>
                            <Link href="https://links.redmadrobot.com/presskit">
                                <a target="_blank" className="footer__container__content__link">Пресс-кит</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                    

                    <div className="footer__container__content footer__container__content--contacts">
                        <div className="footer__container__content__email enlarged" onClick={emailClick}>
                            <a href="mailto:hello@redmadrobot.com">hello@redmadrobot.com</a>
                        </div>
                        <div className="footer__container__content__phone" onClick={phoneClick}>
                            <a href="tel:+7 (495) 933-05-95">+7 (495) 933-05-95</a>
                        </div>

                        <div className="footer__container__content__privacy footer__container__content__privacy--tablet">
                            <Link href="/privacy">
                                <a>Политика обработки персональных данных</a>
                            </Link>
                        </div>

                        <div className="promo__link promo__link--desktop">
                            <span onClick={promoClick}>Разработка — <SheverevSVG/></span>
                        </div>
                    </div>
                </div>

                <div className="footer__container__content footer__container__content--copyright">
                    <div className="footer__container__content__privacy footer__container__content__privacy--mobile">
                        <Link href="/privacy">
                            <a>Политика обработки персональных данных</a>
                        </Link>
                    </div>
                    <div className="footer__container__content__copyright">
                        © red_mad_robot, 2008 — <span className="footer__infinity"><InfinitySVG /></span>
                    </div>

                    <div className="promo__link promo__link--mobile">
                        <span onClick={promoClick}>Разработка — <SheverevSVG /></span>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Footer