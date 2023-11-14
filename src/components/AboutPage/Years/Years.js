import { useBreakpoint } from "@helpers/useBreakpoint";
import HorizontalScroll from "../HorizontalScroll";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import YearText from "./YearText";
import Year from "./Year";
import "./style.less";
import { setRefBlock } from "@store/about/aboutAction";
import Layout from "@components/Layouts/Layout";

const Years = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    const redPage = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRefBlock(redPage));
    }, []);
    

    return (
        <React.Fragment>
            <HorizontalScroll>
                <div className="start-page">
                    <div className="start-page__black">
                        <div className="start-page__name">
                            Как всё начиналось
                        </div>
                    </div>
                    <div className="start-page__red" ref={redPage} id='redPage'>
                        <div className="start-page__wrapper">
                            <div className=" start-page__year">2009</div>
                            <div className="start-page__caption">
                                Появились мы.
                            </div>
                        </div>
                    </div>
                </div>
            </HorizontalScroll>

            <Layout>
                <div className="years__vertical">
                    <Year
                        year={"2010-е"}
                        link={{ text: "В это время в мире..." }}
                    >
                        <YearText title="Что мы делали">
                            <p className="year-text__paragraph">
                                Одними из первых на российском рынке
                                почувствовали ветер перемен: {sm} что мобильные
                                приложения, казавшиеся
                                {sm} просто развлечением, будут развивать бизнес{" "}
                                {md} и приносить деньги. Так и случилось.
                            </p>
                            <p className="year-text__paragraph">
                                Нашим первым серьёзным приложением был личный
                                кабинет абонента «Мой Билайн». Оно задало
                                стандарт качества {sm} в телекоме — и понеслось.
                            </p>
                            <p className="year-text__paragraph">
                                Мы стали работать с ведущими российскими
                                компаниями {sm}{lg} и госкорпорациями. Проектировать,
                                разрабатывать {md} и запускать на рынок сложные
                                мобильные, а затем {xl} и веб-сервисы, создавать
                                системы на базе искусственного интеллекта {xl}{" "}
                                для промышленности.
                            </p>
                        </YearText>
                    </Year>

                    <Year
                        year={"2020-е"}
                        link={{ text: "В это время в мире..." }}
                    >
                        <YearText title="В это время мы...">
                            <p className="year-text__paragraph">
                                Бросаем вызов сложному миру инноваций {sm} и
                                технологий. Наша задача — сделать инновации
                                полезными, а технологии — применимыми {lg} для
                                человека.
                            </p>
                            <p className="year-text__paragraph">
                                Занялись сервис-дизайном и проработкой идей
                                цифровых продуктов, разрабатываем
                                диджитал-стратегии. Помогаем крупным компаниям{" "}
                                {lg} в цифровой трансформации. Поддерживаем
                                прорывные стартапы.
                            </p>
                        </YearText>
                    </Year>
                </div>
            </Layout>
        </React.Fragment>
    );
};
export default Years;
