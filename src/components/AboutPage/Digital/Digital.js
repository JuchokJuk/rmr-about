import IconSolvery from "@assets/NewAbout/Solvery.svg";
import { useBreakpoint } from "@helpers/useBreakpoint";
import Presentum from "@assets/NewAbout/Presentum.svg";
import IconVerno from "@assets/NewAbout/Verno.svg";
import IconHumex from "@assets/NewAbout/Humex.svg";
import IconHitch from "@assets/NewAbout/Hitch.svg";
import IconRdl from "@assets/NewAbout/Rdl.svg";
import "./style.less";
import Layout from "@components/Layouts/Layout";

const Digital = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    return (
        <Layout>
            <div className="about__section digitalization">
                <div className="digitalization__content">
                    <div className="digitalization__name">
                        А ещё&nbsp;
                        <span className="digitalization__name--span">
                            запускаем свои стартапы&nbsp;
                        </span>
                        {maxXl}
                        {xl}
                        {sm}и инвестируем {lg}
                        {md}
                        {sm}в перспективные идеи
                    </div>
                    <div className="digitalization__startupText">
                        Мы помогаем командам предпринимателей выводить на рынок{" "}
                        {md}
                        прорывные{lg} продукты{sm} и строить{xl} бизнес, который
                        {maxXl} будет {md}зарабатывать и устойчиво развиваться.
                    </div>
                    <div className="digitalization__own own">
                        <div className="own__name">Собственные стартапы</div>
                        <div className="own__wrapper">
                            <div className="own__cart">
                                <IconRdl className="own__icon--rdl" />
                                <div className="own__cart--caption">
                                    Искусственный интеллект {lg}и машинное{" "}
                                    {maxXl}
                                    обучение {lg}
                                    {md}для промышленности
                                </div>
                            </div>
                            <div className="own__cart">
                                <IconVerno className="own__icon--verno" />
                                <div className="own__cart--caption">
                                    Обучение сотрудников IT-подразделений
                                    корпораций
                                    {lg} в центре экспертизы {lg}red_mad_robot
                                </div>
                            </div>
                            <div className="own__cart">
                                <IconHumex className="own__icon--humex" />
                                <div className="own__cart--caption own__cart--captionHumex">
                                    Сервис-дизайн и проверка продуктовых {maxXl}
                                    гипотез
                                </div>
                            </div>
                            <div className="own__cart">
                                <IconHitch className="own__icon--hitch" />
                                <div className="own__cart--caption">
                                    Помогает компаниям {md}в короткий срок найти
                                    {maxXl}
                                    {md} и устроить мидл+ специалистов {xl}на
                                    IT-проекты
                                </div>
                            </div>
                            {/*   <div className="own__cart">
                            <div className="own__icon--firmware">Прошивка</div>
                            <div className="own__cart--caption own__cart--firmware">
                                Образовательный продукт red_mad_robot {maxXl}
                                {md}для разработчиков
                            </div>
                        </div> */}
                        </div>
                        <div className="own__support">Поддерживаем команды</div>
                        <div className="own__wrapper">
                            <div className="own__cart solvery">
                                <IconSolvery className="own__icon--solvery" />
                                <div className="own__cart--caption">
                                    Платформа для прокачки профессиональных
                                    навыков {lg}с помощью встреч один на один
                                    {maxXl}
                                    {lg} {md}с наставником
                                </div>
                            </div>
                            <div className="own__cart">
                                <Presentum className="own__icon--presentum" />
                                <div className="own__cart--caption">
                                    Помощь в подготовке презентации {maxXl}
                                    портфолио
                                    {md} для продуктовых {xl}
                                    {md}дизайнеров
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Digital;
