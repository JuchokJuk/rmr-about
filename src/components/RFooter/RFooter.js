import { useBreakpoint } from "@helpers/useBreakpoint";
import SheverevSVG from "@assets/sheverev-logo.svg";
import InfinitySVG from "@assets/infinity.svg";
import CustomLink from "@helpers/customLink";
import { logEvent } from "@helpers/metrics";
import React, { useState } from "react";
import { Router } from "next/router";
import "./RFooter.less";

const RFooter = () => {
    const [isLoading, setLoading] = useState(false);

    const promoClick = () => window.open("https://www.sheverev.com/", "_blank");

    const phoneClick = () => logEvent("PhoneClickFooter");

    const emailClick = () => {
        logEvent("EmailClickFooter", {
            Email: "hello@redmadrobot.com",
        });
    };

    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));

    const breakpoint = useBreakpoint();
    const md = breakpoint === 2 ? <br /> : "";

    return (
        <div className={`rfooter ${isLoading ? "loading" : ""}`}>
            <div className="rfooter__content">
                <div className="rfooter__main firstBlock">
                    <CustomLink href="/privacy">
                        <a className="firstBlock__privacy">
                            Политика обработки персональных данных
                        </a>
                    </CustomLink>
                    <div className="firstBlock__help">
                        По вопросам работы с персональными данными и подписками
                        пишите <br />
                        на 
                        <a
                            className="firstBlock__help--email"
                            href="mailto:marketing@redmadrobot.com"
                        >
                            marketing@redmadrobot.com
                        </a>
                    </div>
                    <div className="firstBlock__robot">
                        Сделано роботами для людей
                    </div>
                    <div className="firstBlock__copyright">
                        © red_mad_robot, 2008—
                        <InfinitySVG className="firstBlock__icon" />
                    </div>
                </div>
                <div className="rfooter__secondBlock secondBlock">
                    <div className="secondBlock__navigation">
                        <div className="secondBlock__left">
                            {/*  <CustomLink href="#">
                                <a className="secondBlock__link">Журнал</a>
                            </CustomLink> */}
                            <CustomLink href="/about">
                                <a className="secondBlock__link">Компания</a>
                            </CustomLink>
                            <CustomLink href="/career">
                                <a className="secondBlock__link">Карьера</a>
                            </CustomLink>
                            <CustomLink href="/contacts">
                                <a className="secondBlock__link">Контакты</a>
                            </CustomLink>
                        </div>
                        <div className="secondBlock__right">
                            {/*  <CustomLink href="#">
                                <a className="secondBlock__link">Кейсы</a>
                            </CustomLink> */}
                            <CustomLink href="https://iot.redmadrobot.ru/">
                                <a
                                    target="_blank"
                                    className="secondBlock__link"
                                >
                                    IoT
                                </a>
                            </CustomLink>
                            <CustomLink href="https://fintech.redmadrobot.ru/">
                                <a
                                    target="_blank"
                                    className="secondBlock__link"
                                >
                                    Fintech hub
                                </a>
                            </CustomLink>
                            <CustomLink href="https://links.redmadrobot.com/presskit">
                                <a
                                    target="_blank"
                                    className="secondBlock__link"
                                >
                                    Пресс-кит
                                </a>
                            </CustomLink>
                        </div>
                    </div>

                    <div className="secondBlock__contacts contacts">
                        <span>
                            <a
                                href="mailto:hello@redmadrobot.com"
                                className="contacts__email"
                                onClick={emailClick}
                            >
                                hello@redmadrobot.com
                            </a>
                        </span>

                        <a
                            href="tel:+7 (495) 933-05-95"
                            className="contacts__phone"
                            onClick={phoneClick}
                        >
                            +7 (495) 933-05-95
                        </a>
                    </div>
                </div>

                <div className="rfooter__develop">
                    <a>
                        Разработка —&nbsp;
                        <SheverevSVG
                            className="rfooter__develop--icon"
                            onClick={promoClick}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RFooter;
