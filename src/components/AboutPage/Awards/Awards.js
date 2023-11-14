import { useBreakpoint } from "@helpers/useBreakpoint";
import Layout from "@components/Layouts/Layout";
import "./style.less";
const Awards = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";

    return (
        <Layout>
            <div className="awards">
                <div className="awards__content">
                    <div className="awards__name">
                        <span className="awards__name--red">59 наград{sm}</span>{" "}
                        в российских {xl}
                        {sm}
                        {lg} {md}и мировых конкурсах
                        {xl} {lg} {md}
                        {sm}и
                        <span className="awards__name--red">
                            {" "}
                            20 достижений{" "}
                        </span>
                        {maxXl}
                        {sm}в рейтингах
                    </div>
                    <div className="awards__wrapper">
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Вошли в рейтинг крупнейших ИТ-компаний 2021
                            </div>
                            <div className="awards-card__caption">
                                TAdviser 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Получили OEE Award Эффективное производство
                                {maxXl} 4.0 — 2021 за разработку лучшего ИИ
                            </div>
                            <div className="awards-card__caption">
                                OEE Award Эффективное {maxXl}производство {xl}
                                4.0 — 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Вошли в список крупнейших поставщиков ИТ{maxXl}{" "}
                                для финансового сектора
                            </div>
                            <div className="awards-card__caption">
                                CNews 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                5-е место в рейтинге диджитал-{sm}подрядчиков
                                крупнейших компаний
                            </div>
                            <div className="awards-card__caption">
                                Рейтинг Рунета 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Бронза European Design Awards 2021 за мобильное
                                приложение {xl}
                                {lg}
                                {md} «Я — школьник»
                            </div>
                            <div className="awards-card__caption">
                                European Design Awards 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Входим в топ-30 лучших работодателей по
                                версии HeadHunter 2021
                            </div>
                            <div className="awards-card__caption">
                                HeadHunter 2021
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Серебряные призеры{maxXl} {xl}
                                {lg}
                                {sm}«HR-бренд 2020» {maxXl}
                                {lg}
                                {xl}
                                {md}от HeadHunter за проект «Школа менторства»
                            </div>
                            <div className="awards-card__caption">
                                HeadHunter 2020
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Номинанты премии European Design Awards 2019{" "}
                                за проект для МСБ «Открытие»
                            </div>
                            <div className="awards-card__caption">
                                European Design Awards 2019
                            </div>
                        </div>
                        <div className="awards-card">
                            <div className="awards-card__name">
                                Победители в «HR-бренд 2019» {sm} от HeadHunter {xl}
                                {lg} {md}за проект {sm}по HR-аналитике
                            </div>
                            <div className="awards-card__caption">
                                HeadHunter 2019
                            </div>
                        </div>
                    </div>
                    <div className="awards__extra">
                        Где-то там ещё семьдесят наград{sm} и достижений, но все
                        не уместились.
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Awards;
