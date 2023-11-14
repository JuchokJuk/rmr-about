import React from "react";
import { useBreakpoint } from "@helpers/useBreakpoint";
import IconHeart from "@assets/NewAbout/Heart.svg";
import "./style.less";

const TabsContent = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";

    return (
        <React.Fragment>
            <div className="tab-item">
                <div className="tab-item__left left">
                    <div className="left__header">
                        <span className="left__number">1_</span>
                        <p>
                            Помогаем найти и определить{sm} ту{md} самую идею
                        </p>
                    </div>
                    <div className="left__items">
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            погружаемся в предметную{sm}
                            {md} область;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            анализируем тренды,{sm}
                            {md} конкурентов{lg} и похожие {md}
                            {xl}
                            {sm} продукты;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            изучаем обратную связь{sm}
                            {md} от клиентов;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            генерируем идеи;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            делаем скоринг идей.
                        </p>
                    </div>
                </div>
                <div className="tab-item__right right">
                    <div className="right__header">Результат</div>
                    <div className="right__text">
                        продуктовые идеи{md} для дальнейшей{sm}
                        {lg} проверки{maxXl}
                        {md} и проработки.
                    </div>
                    {/* <div className="right__btn">Кейсы</div> */}
                </div>
            </div>

            {/* *** 2 блок *** */}

            <div className="tab-item">
                <div className="tab-item__left left">
                    <div className="left__header">
                        <span className="left__number">2_</span>
                        Превращаем идею в продуктовые{sm}
                        {md} гипотезы,{xl}
                        {lg} проверяем{sm}
                        {md} их
                        {maxXl} состоятельность, готовим план{sm}
                        {lg}
                        {md} запуска
                        {xl} продукта
                    </div>

                    <div className="left__items">
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            проводим глубинные{sm} интервью{lg}
                            {xl}
                            {md} с потенциальными
                            {maxXl}
                            {sm} клиентами,{md} уточняем{sm}
                            {lg}
                            {xl} потребности;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            качественно и количественно{sm}
                            {md} проверяем{lg}
                            {xl} продуктовые{sm}
                            {md}
                            {maxXl} гипотезы: тестируем{sm}
                            {lg} прототипы{xl}
                            {md} с пользователями,
                            {maxXl}
                            {sm} проводим{lg}
                            {md} опросы и цифровые{sm}
                            {xl} {md}маркетинговые тесты;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            продумываем бизнес-модель;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            проверяем юридические{sm}
                            {md} нюансы.
                        </p>
                    </div>
                </div>

                <div className="tab-item__right right">
                    <div className="right__header">Результат</div>
                    <div className="right__text">
                        презентация для питча{md} продукта{sm}
                        {lg} перед{md}
                        {xl} инвесторами:
                    </div>
                    <div className="right__items">
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            портрет и потребности{sm}
                            {md}
                            {lg} аудитории;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            ценностное{md} предложение;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            бизнес-модель;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            основные{md} пользовательские{sm}
                            {md}
                            {lg} сценарии;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            роадмэп развития.
                        </p>
                    </div>
                  {/*   <div className="right__btn">Кейсы</div> */}
                </div>
            </div>

            {/* *** 3 блок *** */}

            <div className="tab-item">
                <div className="tab-item__left left">
                    <div className="left__header">
                        <span className="left__number">3_</span>
                        
                        Разрабатываем цифровой MVP{md}
                        {sm} и проводим{lg} закрытый
                        {xl} бета-
                        {maxXl}тест
                    
                    </div>

                    <div className="left__items">
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            выбираем операционную{sm}
                            {md} модель;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            проектируем бизнес-{sm}процессы;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            проектируем и разрабатываем{sm}
                            {md} первую{lg} версию
                            {xl} продукта;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            настраиваем сквозную{sm}
                            {md} аналитику;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            запускаем MVP на friends{sm} and{md} family;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            дорабатываем сервис{sm} по{md} результатам{lg}{" "}
                            закрытого{sm}
                            {xl} бета-{md}
                            {maxXl}теста.
                        </p>
                    </div>
                </div>

                <div className="tab-item__right right">
                    <div className="right__header">Результат</div>
                    <div className="right__items">
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            скорректированная{md} бизнес{sm}
                            {lg}-модель;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            налаженные процессы;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            цифровой продукт,{md} готовый{sm}
                            {lg} к релизу{maxXl}
                            {xl} на{md} широкую{sm}
                            {lg} аудиторию.
                        </p>
                    </div>
                  {/*   <div className="right__btn">Кейсы</div> */}
                </div>
            </div>

            {/* *** 4 блок *** */}

            <div className="tab-item">
                <div className="tab-item__left left">
                    <div className="left__header">
                        <span className="left__number">4_</span>
                        Выводим MVP на рынок
                    </div>

                    <div className="left__items">
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            запускаем MVP на широкую{sm}
                            {md} аудиторию;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            анализируем результаты{sm}
                            {md} запуска;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            уточняем план развития.
                        </p>
                    </div>
                </div>

                <div className="tab-item__right right">
                    <div className="right__header">Результат</div>
                    <div className="right__items">
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            первые продажи;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            уточнённая финансовая{sm}
                            {md} модель;
                        </p>
                        <p className="right__paragraph">
                            <span className="right__dash">—</span>
                            уточнённый план{md} развития{sm}
                            {lg} продукта.
                        </p>
                    </div>
                 {/*    <div className="right__btn">Кейсы</div> */}
                </div>
            </div>

            {/* *** 5 блок *** */}

            <div className="tab-item">
                <div className="tab-item__left left">
                    <div className="left__header">
                        <span className="left__number">5_</span>
                        Развиваем продукт на основании{sm}
                        {md} данных{lg} и помогаем
                        {xl} его{sm}
                        {md}
                        {maxXl} масштабировать
                    </div>

                    <div className="left__items">
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            обеспечиваем развитие{sm}
                            {md} сервиса{lg} и добиваемся{sm}
                            {md}
                            {maxXl}
                            {xl}
                            устойчивого роста;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            настраиваем диджитал-{sm}
                            {md}процессы;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            помогаем выбрать партнёров;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            обучаем сотрудников инхаус;
                        </p>
                        <p className="left__paragraph">
                            <span className="left__dash">—</span>
                            подключаем и менторим{sm}
                            {md} аутстафф.
                        </p>
                    </div>
                </div>

                <div className="tab-item__right right">
                    <div className="right__header">Результат</div>
                    <div className="right__text">
                        работающий бизнес <IconHeart className='right__icon'/>
                    </div>
                   {/*  <div className="right__btn">Кейсы</div> */}
                </div>
            </div>
        </React.Fragment>
    );
};
export default TabsContent;
