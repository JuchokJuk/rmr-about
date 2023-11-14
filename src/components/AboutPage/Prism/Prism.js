import { useBreakpoint } from "@helpers/useBreakpoint";
import IconArrow from "@assets/NewAbout/ArrowRight.svg";
import Layout from "@components/Layouts/Layout";
import "./style.less";
import { logEvent } from "@helpers/metrics";
const Prism = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    return (
        <Layout>
            <div className="about__section prism">
                <div className="prism__content">
                    <div className="prism__name">
                        Мир сквозь призму окуляров роботов
                    </div>
                    <div className="prism__wrapper">
                        <div className="prism__cart">
                            <a
                                href="https://t.me/Redmadnews"
                                target="_blank"
                                className="prism__nameCart"
                            >
                                Redmadnews в Телеграме{" "}
                                <IconArrow className="prism__nameCart--arrow" />
                            </a>
                            <div className="prism__aboutCart">
                                Новости цифровизации и бодрых стартапов со всего
                                мира
                            </div>
                        </div>
                        <div className="prism__cart">
                            <a
                                href="https://t.me/design_jam"
                                target="_blank"
                                className="prism__nameCart"
                            >
                                Design Jam в Телеграме{" "}
                                <IconArrow className="prism__nameCart--arrow" />
                            </a>
                            <div className="prism__aboutCart">
                                Вдохновение: красивые и интересные вещи из самых
                                разных областей {maxXl}
                                {md} с комментариями рободизайнеров
                            </div>
                        </div>
                        <div className="prism__cart">
                            <a
                                href="https://vc.ru/redmadrobot"
                                target="_blank"
                                className="prism__nameCart"
                                onClick={() => logEvent("OutsideLinkVC")}
                            >
                                Блог на vc.ru{" "}
                                <IconArrow className="prism__nameCart--arrow" />
                            </a>
                            <div className="prism__aboutCart">
                                Для CTO, продактов и проджектов, аналитиков,
                                дизайнеров цифровых продуктов и сочувствующих
                            </div>
                        </div>
                        <div className="prism__cart">
                            <a
                                href="https://habr.com/ru/users/redmadrobot/posts/"
                                target="_blank"
                                className="prism__nameCart"
                                onClick={() => logEvent("OutsideLinkHabr")}
                            >
                                Робоблог на Хабре{" "}
                                <IconArrow className="prism__nameCart--arrow" />
                            </a>
                            <div className="prism__aboutCart">
                                Интересное и полезное{md} для разработчиков, QA
                                и гиков
                            </div>
                        </div>
                        <div className="prism__cart">
                            <a
                                className="prism__nameCart"
                                href="https://vk.com/red_mad_robot"
                                target="_blank"
                            >
                                Роботы «Вконтакте»{" "}
                                <IconArrow className="prism__nameCart--arrow" />
                            </a>
                            <div className="prism__aboutCart">
                                Наши новости, вакансии, стажировки{sm} {md} и
                                мероприятия
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Prism;
