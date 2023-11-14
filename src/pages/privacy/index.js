import { initTags, setSelectedUrl } from "@store/tags/tagsAction";
import { initSidebar } from "@store/sidebar/sidebarAction";
import Paragraph from "@components/Styles/Paragraph";
import PixelArrow from "@assets/pixelArrowLeft.svg";
import Wrapper from "@components/SiteGrid/Wrapper";
import Heading from "@components/Styles/Heading";
import { storeWrapper } from "@store/store";
import Seo from "@components/Seo";
import router from "next/router";
import React from "react";
import "./privacy.less";

const PrivacyPage = () => {
    const host = process.env.NEXT_PUBLIC_SITE_URL + "privacy";

    let state = {
        data: {
            seo: {},
            currentUrl: host,
        },
    };
    const goBack = () => {
        router.push("/");
    };

    return (
        <React.Fragment>
            <Seo
                seo={state.data.seo}
                ogUrl={state.data.currentUrl}
                componentName={"privacy"}
            />
            <Wrapper>
                <div className="privacy-page">
                    <div
                        className="privacy-page--back step-back"
                        onClick={() => goBack()}
                    >
                        <div className="step-back__arrow">
                            <PixelArrow />
                        </div>
                        <div>Назад к главному</div>
                    </div>

                    <Heading.H1new className="privacy-page__name">
                        Политика обработки персональных&nbsp;данных
                    </Heading.H1new>

                    {/*  */}
                    {/*  */}
                    {/*  */}
                    <div className="privacy-page__content">
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                1. Общие положения
                            </Heading.H2small>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    Настоящая политика обработки персональных
                                    данных составлена в&nbsp;соответствии
                                    с&nbsp;требованиями Федерального закона
                                    от&nbsp;27.07.2006. &#8470;&nbsp;152-ФЗ
                                    &laquo;О&nbsp;персональных данных&raquo;
                                    (далее&nbsp;&mdash; Закон
                                    о&nbsp;персональных данных)
                                    и&nbsp;определяет порядок обработки
                                    персональных данных и&nbsp;меры
                                    по&nbsp;обеспечению безопасности
                                    персональных данных, предпринимаемые
                                    Обществом с&nbsp;ограниченной
                                    ответственностью &laquo;РЭДМЭДРОБОТ
                                    МСК&raquo; (далее&nbsp;&mdash; Оператор).
                                </Paragraph.P1Long>
                            </div>
                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    1.1. Оператор ставит своей важнейшей целью
                                    и&nbsp;условием осуществления своей
                                    деятельности соблюдение прав и&nbsp;свобод
                                    человека и&nbsp;гражданина при обработке его
                                    персональных данных, в&nbsp;том числе защиты
                                    прав на&nbsp;неприкосновенность частной
                                    жизни, личную и&nbsp;семейную тайну.
                                </Paragraph.P1Long>
                            </div>
                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    1.2. Настоящая политика Оператора
                                    в&nbsp;отношении обработки персональных
                                    данных (далее&nbsp;&mdash; Политика)
                                    применяется ко&nbsp;всей информации, которую
                                    Оператор может получить о&nbsp;посетителях
                                    веб-сайта https://redmadrobot.ru/.
                                </Paragraph.P1Long>
                            </div>
                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    1.3. Политика распространяется
                                    на&nbsp;отношения в&nbsp;области обработки
                                    персональных данных, возникшие
                                    у&nbsp;Оператора как&nbsp;до, так
                                    и&nbsp;после утверждения настоящей Политики.
                                </Paragraph.P1Long>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                2. Основные понятия, используемые
                                в&nbsp;Политике
                            </Heading.H2small>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.1. Автоматизированная обработка
                                    персональных данных&nbsp;&mdash; обработка
                                    персональных данных с&nbsp;помощью средств
                                    вычислительной техники.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.2. Блокирование персональных
                                    данных&nbsp;&mdash; временное прекращение
                                    обработки персональных данных
                                    (за&nbsp;исключением случаев, если обработка
                                    необходима для уточнения персональных
                                    данных).
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.3. Веб-сайт&nbsp;&mdash; совокупность
                                    графических и&nbsp;информационных
                                    материалов, а&nbsp;также программ для ЭВМ
                                    и&nbsp;баз данных, обеспечивающих
                                    их&nbsp;доступность в&nbsp;сети интернет
                                    по&nbsp;сетевому адресу
                                    https://redmadrobot.ru/.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.4. Информационная система персональных
                                    данных&nbsp;&mdash; совокупность
                                    содержащихся в&nbsp;базах данных
                                    персональных данных, и&nbsp;обеспечивающих
                                    их&nbsp;обработку информационных технологий
                                    и&nbsp;технических средств.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.5. Обезличивание персональных
                                    данных&nbsp;&mdash; действия,
                                    в&nbsp;результате которых невозможно
                                    определить без использования дополнительной
                                    информации принадлежность персональных
                                    данных конкретному Пользователю или иному
                                    субъекту персональных данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.6. Обработка персональных
                                    данных&nbsp;&mdash; любое действие
                                    (операция) или совокупность действий
                                    (операций), совершаемых
                                    с&nbsp;использованием средств автоматизации
                                    или без использования таких средств
                                    с&nbsp;персональными данными, включая сбор,
                                    запись, систематизацию, накопление,
                                    хранение, уточнение (обновление, изменение),
                                    извлечение, использование, передачу
                                    (распространение, предоставление, доступ),
                                    обезличивание, блокирование, удаление,
                                    уничтожение персональных данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.7. Оператор&nbsp;&mdash; государственный
                                    орган, муниципальный орган, юридическое или
                                    физическое лицо, самостоятельно или
                                    совместно с&nbsp;другими лицами
                                    организующие&nbsp;и (или) осуществляющие
                                    обработку персональных данных, а&nbsp;также
                                    определяющие цели обработки персональных
                                    данных, состав персональных данных,
                                    подлежащих обработке, действия (операции),
                                    совершаемые с&nbsp;персональными данными.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.8. Персональные данные&nbsp;&mdash; любая
                                    информация, относящаяся прямо или косвенно
                                    к&nbsp;определенному или определяемому
                                    Пользователю веб-сайта
                                    https://redmadrobot.ru/.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.9. Персональные данные, разрешенные
                                    субъектом персональных данных для
                                    распространения,&nbsp;&mdash; персональные
                                    данные, доступ неограниченного круга лиц
                                    к&nbsp;которым предоставлен субъектом
                                    персональных данных путем дачи согласия
                                    на&nbsp;обработку персональных данных,
                                    разрешенных субъектом персональных данных
                                    для распространения в&nbsp;порядке,
                                    предусмотренном Законом о&nbsp;персональных
                                    данных (далее&nbsp;&mdash; персональные
                                    данные, разрешенные для распространения).
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.10. Пользователь&nbsp;&mdash; любой
                                    посетитель веб-сайта
                                    https://redmadrobot.ru/.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.11. Предоставление персональных
                                    данных&nbsp;&mdash; действия, направленные
                                    на&nbsp;раскрытие персональных данных
                                    определенному лицу или определенному кругу
                                    лиц.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.12. Распространение персональных
                                    данных&nbsp;&mdash; любые действия,
                                    направленные на&nbsp;раскрытие персональных
                                    данных неопределенному кругу лиц (передача
                                    персональных данных) или
                                    на&nbsp;ознакомление с&nbsp;персональными
                                    данными неограниченного круга лиц,
                                    в&nbsp;том числе обнародование персональных
                                    данных в&nbsp;средствах массовой информации,
                                    размещение
                                    в&nbsp;информационно-телекоммуникационных
                                    сетях или предоставление доступа
                                    к&nbsp;персональным данным каким-либо иным
                                    способом.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.13. Трансграничная передача персональных
                                    данных&nbsp;&mdash; передача персональных
                                    данных на&nbsp;территорию иностранного
                                    государства органу власти иностранного
                                    государства, иностранному физическому или
                                    иностранному юридическому лицу.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    2.14. Уничтожение персональных
                                    данных&nbsp;&mdash; любые действия,
                                    в&nbsp;результате которых персональные
                                    данные уничтожаются безвозвратно
                                    с&nbsp;невозможностью дальнейшего
                                    восстановления содержания персональных
                                    данных в&nbsp;информационной системе
                                    персональных данных&nbsp;и (или)
                                    уничтожаются материальные носители
                                    персональных данных.
                                </Paragraph.P1Long>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                3. Основные права и&nbsp;обязанности Оператора
                            </Heading.H2small>

                            <div className="privacy-page__list">
                                <div className="privacy-page__list">
                                    <Paragraph.P1Long>
                                        3.1. Оператор имеет право:
                                    </Paragraph.P1Long>
                                </div>
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;получать от&nbsp;субъекта
                                        персональных данных достоверные
                                        информацию и/или документы, содержащие
                                        персональные данные;
                                    </Paragraph.P1Long>
                                </div>
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;в&nbsp;случае отзыва
                                        субъектом персональных данных согласия
                                        на&nbsp;обработку персональных данных
                                        Оператор вправе продолжить обработку
                                        персональных данных без согласия
                                        субъекта персональных данных при наличии
                                        оснований, указанных в&nbsp;Законе
                                        о&nbsp;персональных данных;
                                    </Paragraph.P1Long>
                                </div>
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;самостоятельно определять
                                        состав и&nbsp;перечень мер, необходимых
                                        и&nbsp;достаточных для обеспечения
                                        выполнения обязанностей, предусмотренных
                                        Законом о&nbsp;персональных данных
                                        и&nbsp;принятыми в&nbsp;соответствии
                                        с&nbsp;ним нормативными правовыми
                                        актами, если иное не&nbsp;предусмотрено
                                        Законом о&nbsp;персональных данных или
                                        другими федеральными законами.
                                    </Paragraph.P1Long>
                                </div>
                            </div>
                            <div className="privacy-page__list">
                                <div className="privacy-page__list">
                                    <Paragraph.P1Long>
                                        3.2. Оператор обязан:
                                    </Paragraph.P1Long>
                                </div>
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;предоставлять субъекту
                                        персональных данных по&nbsp;его просьбе
                                        информацию, касающуюся обработки его
                                        персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;организовывать обработку
                                        персональных данных в&nbsp;порядке,
                                        установленном действующим
                                        законодательством РФ;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;отвечать на&nbsp;обращения
                                        и&nbsp;запросы субъектов персональных
                                        данных и&nbsp;их&nbsp;законных
                                        представителей в&nbsp;соответствии
                                        с&nbsp;требованиями Закона
                                        о&nbsp;персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;сообщать
                                        в&nbsp;уполномоченный орган
                                        по&nbsp;защите прав субъектов
                                        персональных данных по&nbsp;запросу
                                        этого органа необходимую информацию
                                        в&nbsp;течение 30&nbsp;дней с&nbsp;даты
                                        получения такого запроса;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;публиковать или иным
                                        образом обеспечивать неограниченный
                                        доступ к&nbsp;настоящей Политике
                                        в&nbsp;отношении обработки персональных
                                        данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;принимать правовые,
                                        организационные и&nbsp;технические меры
                                        для защиты персональных данных
                                        от&nbsp;неправомерного или случайного
                                        доступа к&nbsp;ним, уничтожения,
                                        изменения, блокирования, копирования,
                                        предоставления, распространения
                                        персональных данных, а&nbsp;также
                                        от&nbsp;иных неправомерных действий
                                        в&nbsp;отношении персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;прекратить передачу
                                        (распространение, предоставление,
                                        доступ) персональных данных, прекратить
                                        обработку и&nbsp;уничтожить персональные
                                        данные в&nbsp;порядке и&nbsp;случаях,
                                        предусмотренных Законом
                                        о&nbsp;персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;при сборе персональных
                                        данных предоставить информацию
                                        об&nbsp;обработке Персональный данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;в&nbsp;случаях если
                                        Персональные данные были получены
                                        не&nbsp;от&nbsp;субъекта Персональных
                                        данных, уведомить об&nbsp;этом субъекта;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;при отказе
                                        в&nbsp;предоставлении Персональных
                                        данных субъекту разъясняются последствия
                                        такого отказа;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;исполнять иные обязанности,
                                        предусмотренные Законом
                                        о&nbsp;персональных данных.
                                    </Paragraph.P1Long>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                4. Основные права и&nbsp;обязанности субъектов
                                персональных данных
                            </Heading.H2small>

                            <div className="privacy-page__list">
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        4.1. Субъекты персональных данных имеют
                                        право:
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;получать информацию,
                                        касающуюся обработки его персональных
                                        данных, за&nbsp;исключением случаев,
                                        предусмотренных федеральными законами.
                                        Сведения предоставляются субъекту
                                        персональных данных Оператором
                                        в&nbsp;доступной форме,
                                        и&nbsp;в&nbsp;них не&nbsp;должны
                                        содержаться персональные данные,
                                        относящиеся к&nbsp;другим субъектам
                                        персональных данных, за&nbsp;исключением
                                        случаев, когда имеются законные
                                        основания для раскрытия таких
                                        персональных данных. Перечень информации
                                        и&nbsp;порядок ее&nbsp;получения
                                        установлен Законом о&nbsp;персональных
                                        данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;требовать от&nbsp;оператора
                                        уточнения его персональных данных,
                                        их&nbsp;блокирования или уничтожения
                                        в&nbsp;случае, если персональные данные
                                        являются неполными, устаревшими,
                                        неточными, незаконно полученными или
                                        не&nbsp;являются необходимыми для
                                        заявленной цели обработки, а&nbsp;также
                                        принимать предусмотренные законом меры
                                        по&nbsp;защите своих прав;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;выдвигать условие
                                        предварительного согласия при обработке
                                        персональных данных в&nbsp;целях
                                        продвижения на&nbsp;рынке товаров, работ
                                        и&nbsp;услуг;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;на&nbsp;отзыв согласия
                                        на&nbsp;обработку персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;обжаловать
                                        в&nbsp;уполномоченный орган
                                        по&nbsp;защите прав субъектов
                                        персональных данных или в&nbsp;судебном
                                        порядке неправомерные действия или
                                        бездействие Оператора при обработке его
                                        персональных данных;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;на&nbsp;осуществление иных
                                        прав, предусмотренных законодательством
                                        РФ.
                                    </Paragraph.P1Long>
                                </div>
                            </div>
                            <div className="privacy-page__list">
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        4.2. Субъекты персональных данных
                                        обязаны:
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;предоставлять Оператору
                                        достоверные данные о&nbsp;себе;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;сообщать Оператору
                                        об&nbsp;уточнении (обновлении,
                                        изменении) своих персональных данных.
                                    </Paragraph.P1Long>
                                </div>
                            </div>
                            <div>
                                <Paragraph.P1Long>
                                    4.3. Лица, передавшие Оператору
                                    недостоверные сведения о&nbsp;себе, либо
                                    сведения о&nbsp;другом субъекте персональных
                                    данных без согласия последнего, несут
                                    ответственность в&nbsp;соответствии
                                    с&nbsp;законодательством&nbsp;РФ.
                                </Paragraph.P1Long>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                5. Персональные данные, обрабатываемые
                                Оператором
                            </Heading.H2small>

                            <div className="privacy-page__list">
                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        5.1. Оператор может собирать
                                        и&nbsp;обрабатывать следующие сведения
                                        о&nbsp;Пользователе (персональные данные
                                        Пользователя):
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;фамилия, имя, отчество;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;электронный адрес;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;адрес;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;номера телефонов;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;место работы, должность;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;корреспонденцию или
                                        ее&nbsp;копии, в&nbsp;случае обращения
                                        Пользователя к&nbsp;Оператору;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;пройденные Пользователем
                                        опросы;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;данные об&nbsp;устройстве
                                        Пользователя, такие как его название
                                        и&nbsp;операционная система, тип
                                        браузера, язык устройства,
                                        производитель, информация о&nbsp;сети,
                                        информация об&nbsp;операторе связи,
                                        а&nbsp;также иные доступные технические
                                        данные;
                                    </Paragraph.P1Long>
                                </div>

                                <div className="privacy-page__list--item">
                                    <Paragraph.P1Long>
                                        &mdash;&nbsp;также на&nbsp;сайте
                                        происходит сбор и&nbsp;обработка
                                        обезличенных данных о&nbsp;посетителях
                                        (в&nbsp;т.ч. файлов
                                        &laquo;cookie&raquo;) с&nbsp;помощью
                                        сервисов интернет-статистики (Яндекс
                                        Метрика и&nbsp;Гугл Аналитика
                                        и&nbsp;других) (см. раздел
                                        &laquo;Cookie-файлы&raquo;
                                        на&nbsp;Сайте).
                                    </Paragraph.P1Long>
                                </div>
                            </div>
                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.2. Вышеперечисленные данные далее
                                    по&nbsp;тексту Политики объединены общим
                                    понятием Персональные данные.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.3. Обработка специальных категорий
                                    персональных данных, касающихся расовой,
                                    национальной принадлежности, политических
                                    взглядов, религиозных или философских
                                    убеждений, интимной жизни, Оператором
                                    не&nbsp;осуществляется.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.4. Обработка персональных данных,
                                    разрешенных для распространения,
                                    из&nbsp;числа специальных категорий
                                    персональных данных, указанных
                                    в&nbsp;ч.&nbsp;1&nbsp;ст.&nbsp;10&nbsp;Закона
                                    о&nbsp;персональных данных, допускается,
                                    если соблюдаются запреты и&nbsp;условия,
                                    предусмотренные&nbsp;ст.&nbsp;10.1 Закона
                                    о&nbsp;персональных данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.5. Согласие Пользователя на&nbsp;обработку
                                    персональных данных, разрешенных для
                                    распространения, оформляется отдельно
                                    от&nbsp;других согласий на&nbsp;обработку
                                    его персональных данных. При этом
                                    соблюдаются условия, предусмотренные,
                                    в&nbsp;частности, ст.&nbsp;10.1 Закона
                                    о&nbsp;персональных данных. Требования
                                    к&nbsp;содержанию такого согласия
                                    устанавливаются уполномоченным органом
                                    по&nbsp;защите прав субъектов персональных
                                    данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.5.1 Согласие на&nbsp;обработку
                                    персональных данных, разрешенных для
                                    распространения, Пользователь предоставляет
                                    Оператору непосредственно.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.5.2 Оператор обязан в&nbsp;срок
                                    не&nbsp;позднее трех рабочих дней
                                    с&nbsp;момента получения указанного согласия
                                    Пользователя опубликовать информацию
                                    об&nbsp;условиях обработки, о&nbsp;наличии
                                    запретов и&nbsp;условий на&nbsp;обработку
                                    неограниченным кругом лиц персональных
                                    данных, разрешенных для распространения.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.5.3 Передача (распространение,
                                    предоставление, доступ) персональных данных,
                                    разрешенных субъектом персональных данных
                                    для распространения, должна быть прекращена
                                    в&nbsp;любое время по&nbsp;требованию
                                    субъекта персональных данных. Данное
                                    требование должно включать в&nbsp;себя
                                    фамилию, имя, отчество (при наличии),
                                    контактную информацию (номер телефона, адрес
                                    электронной почты или почтовый адрес)
                                    субъекта персональных данных, а&nbsp;также
                                    перечень персональных данных, обработка
                                    которых подлежит прекращению. Указанные
                                    в&nbsp;данном требовании персональные данные
                                    могут обрабатываться только Оператором,
                                    которому оно направлено.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    5.5.4 Согласие на&nbsp;обработку
                                    персональных данных, разрешенных для
                                    распространения, прекращает свое действие
                                    с&nbsp;момента поступления Оператору
                                    требования, указанного в&nbsp;п.&nbsp;5.5.3
                                    настоящей Политики в&nbsp;отношении
                                    обработки персональных данных.
                                </Paragraph.P1Long>
                            </div>
                        </div>

                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                6. Принципы обработки персональных данных
                            </Heading.H2small>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.1. Обработка персональных данных
                                    осуществляется на&nbsp;законной
                                    и&nbsp;справедливой основе.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.2. Обработка персональных данных
                                    ограничивается достижением конкретных,
                                    заранее определенных и&nbsp;законных целей.
                                    Не&nbsp;допускается обработка персональных
                                    данных, несовместимая с&nbsp;целями сбора
                                    персональных данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.3. Не&nbsp;допускается объединение баз
                                    данных, содержащих персональные данные,
                                    обработка которых осуществляется
                                    в&nbsp;целях, несовместимых между собой.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.4. Обработке подлежат только персональные
                                    данные, которые отвечают целям
                                    их&nbsp;обработки.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.5. Содержание и&nbsp;объем обрабатываемых
                                    персональных данных соответствуют заявленным
                                    целям обработки. Не&nbsp;допускается
                                    избыточность обрабатываемых персональных
                                    данных по&nbsp;отношению к&nbsp;заявленным
                                    целям их&nbsp;обработки.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.6. При обработке персональных данных
                                    обеспечивается точность персональных данных,
                                    их&nbsp;достаточность,
                                    а&nbsp;в&nbsp;необходимых случаях
                                    и&nbsp;актуальность по&nbsp;отношению
                                    к&nbsp;целям обработки персональных данных.
                                    Оператор принимает необходимые меры и/или
                                    обеспечивает их&nbsp;принятие
                                    по&nbsp;удалению или уточнению неполных или
                                    неточных данных.
                                </Paragraph.P1Long>
                            </div>

                            <div className="privacy-page__block--description">
                                <Paragraph.P1Long>
                                    6.7. Хранение персональных данных
                                    осуществляется в&nbsp;форме, позволяющей
                                    определить субъекта персональных данных,
                                    не&nbsp;дольше, чем этого требуют цели
                                    обработки персональных данных, если срок
                                    хранения персональных данных
                                    не&nbsp;установлен федеральным законом,
                                    договором, стороной которого,
                                    выгодоприобретателем или поручителем
                                    по&nbsp;которому является субъект
                                    персональных данных. Обрабатываемые
                                    персональные данные уничтожаются либо
                                    обезличиваются в&nbsp;течение 30&nbsp;дней
                                    по&nbsp;достижении целей обработки или
                                    в&nbsp;случае утраты необходимости
                                    в&nbsp;достижении этих целей, если иное
                                    не&nbsp;предусмотрено федеральным законом.
                                </Paragraph.P1Long>
                            </div>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                7. Цели обработки персональных данных
                            </Heading.H2small>

                            <div className="privacy-page__list">
                                <Paragraph.P1Long className="privacy-page__list--item">
                                    7.1. Цель обработки персональных данных
                                    Пользователя:
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;информирование Пользователя
                                    посредством отправки электронных писем;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;сотрудничество
                                    с&nbsp;Пользователем как
                                    с&nbsp;клиентом/представителем медиа;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;привлечение и&nbsp;отбор
                                    кандидатов на&nbsp;работу у&nbsp;Оператора;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для ответов на&nbsp;запросы
                                    Пользователя, направленные через Сайт или
                                    на&nbsp;корпоративную почту;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для организации различных
                                    мероприятий (семинаров, воршопов и&nbsp;тд);
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для соблюдения законных
                                    обязательств Оператора;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;чтобы осуществлять,
                                    устанавливать или защищать законные права
                                    Оператора, а&nbsp;также для защиты жизненно
                                    важных интересов, как Пользователя, так
                                    и&nbsp;других лиц;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;при наличии согласия
                                    Пользователя Оператор может также
                                    обрабатывать данные Пользователей для
                                    дополнительных целей.
                                </Paragraph.P1Long>
                            </div>
                            <Paragraph.P1Long className="privacy-page__block--description">
                                7.2. Также Оператор имеет право направлять
                                Пользователю уведомления о&nbsp;новых продуктах
                                и&nbsp;услугах, специальных предложениях
                                и&nbsp;различных событиях. Пользователь всегда
                                может отказаться от&nbsp;получения
                                информационных сообщений, направив Оператору
                                письмо на&nbsp;адрес электронной почты
                                personaldata@redmadrobot.com с&nbsp;пометкой
                                &laquo;Отказ от&nbsp;уведомлений о&nbsp;новых
                                продуктах и&nbsp;услугах и&nbsp;специальных
                                предложениях&raquo;.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long>
                                7.3. Обезличенные данные Пользователей,
                                собранные с&nbsp;помощью сервисов
                                интернет-статистики, служат для сбора информации
                                о&nbsp;действиях Пользователей на&nbsp;сайте,
                                улучшения качества сайта и&nbsp;его содержания.
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                8. Правовые основания обработки персональных
                                данных
                            </Heading.H2small>

                            <div className="privacy-page__list">
                                <Paragraph.P1Long className="privacy-page__list--item">
                                    8.1. Правовыми основаниями обработки
                                    персональных данных Оператором являются:
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;федеральный закон
                                    &laquo;О&nbsp;персональных данных&raquo;
                                    от&nbsp;27.07.2006&nbsp;N 152-ФЗ;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;федеральные законы, иные
                                    нормативно-правовые акты в&nbsp;сфере защиты
                                    персональных данных;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;согласия Пользователей
                                    на&nbsp;обработку их&nbsp;персональных
                                    данных, на&nbsp;обработку персональных
                                    данных, разрешенных для распространения.
                                </Paragraph.P1Long>
                            </div>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                8.2. Оператор обрабатывает персональные данные
                                Пользователя только в&nbsp;случае
                                их&nbsp;заполнения и/или отправки Пользователем
                                самостоятельно через специальные формы,
                                расположенные на&nbsp;сайте
                                https://redmadrobot.ru/ или направленные
                                Оператору посредством электронной почты.
                                Проставляя отметку (&laquo;галочку&raquo;)
                                в&nbsp;специальном поле, Пользователь выражает
                                свое согласие с&nbsp;данной Политикой.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                8.3. Оператор обрабатывает обезличенные данные
                                о&nbsp;Пользователей в&nbsp;случае, если это
                                разрешено в&nbsp;настройках браузера
                                Пользователя (включено сохранение файлов
                                &laquo;cookie&raquo; и&nbsp;использование
                                технологии JavaScript).
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                8.4. Субъект персональных данных самостоятельно
                                принимает решение о&nbsp;предоставлении его
                                персональных данных и&nbsp;дает согласие
                                свободно, своей волей и&nbsp;в&nbsp;своем
                                интересе.
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                9. Условия обработки персональных данных
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.1. Обработка персональных данных
                                осуществляется с&nbsp;согласия субъекта
                                персональных данных на&nbsp;обработку его
                                персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.2. Обработка персональных данных необходима
                                для достижения целей, предусмотренных законами
                                Российской Федерации или международным договором
                                Российской Федерации, для осуществления
                                возложенных законодательством Российской
                                Федерации на&nbsp;оператора функций, полномочий
                                и&nbsp;обязанностей.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.3. Обработка персональных данных необходима
                                для осуществления правосудия, исполнения
                                судебного акта, акта другого органа или
                                должностного лица, подлежащих исполнению
                                в&nbsp;соответствии с&nbsp;законодательством
                                Российской Федерации об&nbsp;исполнительном
                                производстве.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.4. Обработка персональных данных необходима
                                для исполнения договора, стороной которого либо
                                выгодоприобретателем или поручителем
                                по&nbsp;которому является субъект персональных
                                данных, а&nbsp;также для заключения договора
                                по&nbsp;инициативе субъекта персональных данных
                                или договора, по&nbsp;которому субъект
                                персональных данных будет являться
                                выгодоприобретателем или поручителем.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.5. Обработка персональных данных необходима
                                для осуществления прав и&nbsp;законных интересов
                                оператора или третьих лиц либо для достижения
                                общественно значимых целей при условии, что при
                                этом не&nbsp;нарушаются права и&nbsp;свободы
                                субъекта персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.6. Осуществляется обработка персональных
                                данных, доступ неограниченного круга лиц
                                к&nbsp;которым предоставлен субъектом
                                персональных данных либо по&nbsp;его просьбе
                                (далее&nbsp;&mdash; общедоступные персональные
                                данные).
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                9.7. Осуществляется обработка персональных
                                данных, подлежащих опубликованию или
                                обязательному раскрытию в&nbsp;соответствии
                                с&nbsp;федеральным законом.
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                10. Порядок сбора, хранения, передачи
                                и&nbsp;других видов обработки персональных
                                данных
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                Безопасность персональных данных, которые
                                обрабатываются Оператором, обеспечивается путем
                                реализации правовых, организационных
                                и&nbsp;технических мер, необходимых для
                                выполнения в&nbsp;полном объеме требований
                                действующего законодательства в&nbsp;области
                                защиты персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.1. Оператор обеспечивает сохранность
                                персональных данных и&nbsp;принимает все
                                возможные меры, исключающие доступ
                                к&nbsp;персональным данным неуполномоченных лиц.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.2. Персональные данные Пользователя никогда,
                                ни&nbsp;при каких условиях не&nbsp;будут
                                переданы третьим лицам, за&nbsp;исключением
                                случаев, связанных с&nbsp;исполнением
                                действующего законодательства либо
                                в&nbsp;случае, если субъектом персональных
                                данных дано согласие Оператору на&nbsp;передачу
                                данных третьему лицу для исполнения обязательств
                                по&nbsp;гражданско-правовому договору.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.3. В&nbsp;случае выявления неточностей
                                в&nbsp;персональных данных, Пользователь может
                                актуализировать их&nbsp;самостоятельно, путем
                                направления Оператору уведомление на&nbsp;адрес
                                электронной почты Оператора
                                personaldata@redmadrobot.com с&nbsp;пометкой
                                &laquo;Актуализация персональных данных&raquo;.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.4. Срок обработки персональных данных
                                определяется достижением целей, для которых были
                                собраны персональные данные, если иной срок
                                не&nbsp;предусмотрен договором или действующим
                                законодательством. Пользователь может
                                в&nbsp;любой момент отозвать свое согласие
                                на&nbsp;обработку персональных данных, направив
                                Оператору уведомление посредством электронной
                                почты на&nbsp;электронный адрес Оператора
                                personaldata@redmadrobot.com с&nbsp;пометкой
                                &laquo;Отзыв согласия на&nbsp;обработку
                                персональных данных&raquo;.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.5. Вся информация, которая собирается
                                сторонними сервисами, в&nbsp;том числе
                                платежными системами, средствами связи
                                и&nbsp;другими поставщиками услуг, хранится
                                и&nbsp;обрабатывается указанными лицами
                                (Операторами) в&nbsp;соответствии
                                с&nbsp;их&nbsp;Пользовательским соглашением
                                и&nbsp;Политикой конфиденциальности. Субъект
                                персональных данных и/или Пользователь обязан
                                самостоятельно своевременно ознакомиться
                                с&nbsp;указанными документами. Оператор
                                не&nbsp;несет ответственность за&nbsp;действия
                                третьих лиц, в&nbsp;том числе указанных
                                в&nbsp;настоящем пункте поставщиков услуг.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.6. Установленные субъектом персональных
                                данных запреты на&nbsp;передачу (кроме
                                предоставления доступа), а&nbsp;также
                                на&nbsp;обработку или условия обработки (кроме
                                получения доступа) персональных данных,
                                разрешенных для распространения,
                                не&nbsp;действуют в&nbsp;случаях обработки
                                персональных данных в&nbsp;государственных,
                                общественных и&nbsp;иных публичных интересах,
                                определенных законодательством РФ.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.7. Оператор при обработке персональных данных
                                обеспечивает конфиденциальность персональных
                                данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.8. Оператор осуществляет хранение
                                персональных данных в&nbsp;форме, позволяющей
                                определить субъекта персональных данных,
                                не&nbsp;дольше, чем этого требуют цели обработки
                                персональных данных, если срок хранения
                                персональных данных не&nbsp;установлен
                                федеральным законом, договором, стороной
                                которого, выгодоприобретателем или поручителем
                                по&nbsp;которому является субъект персональных
                                данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.9. Условием прекращения обработки
                                персональных данных может являться достижение
                                целей обработки персональных данных, истечение
                                срока действия согласия субъекта персональных
                                данных или отзыв согласия субъектом персональных
                                данных, а&nbsp;также выявление неправомерной
                                обработки персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.10. При сборе персональных данных, в&nbsp;том
                                числе посредством информационно
                                телекоммуникационной сети интернет, Оператор
                                обеспечивает запись, систематизацию, накопление,
                                хранение, уточнение (обновление, изменение),
                                извлечение персональных данных граждан
                                Российской Федерации с&nbsp;использованием баз
                                данных, находящихся на&nbsp;территории
                                Российской Федерации, за&nbsp;исключением
                                случаев, указанных в&nbsp;Законе
                                о&nbsp;персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                10.11. Информация на&nbsp;сайте Оператора
                                (статьи, анонсы и&nbsp;тд) может содержать
                                ссылки других сайтов и&nbsp;сервисов,
                                а&nbsp;также ссылки, ведущие на&nbsp;другие
                                сайты и&nbsp;сервисы. Оператор не&nbsp;несет
                                ответственности за&nbsp;порядок использования
                                персональных данных сторонними сайтами, или
                                за&nbsp;их&nbsp;содержание. Пользователь сам
                                несет ответственность за&nbsp;переход
                                по&nbsp;ссылкам и&nbsp;проверку политики
                                использования персональных данных
                                соответствующих веб- сайтов и&nbsp;сервисов
                                перед отправкой им&nbsp;любых персональных
                                данных.
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                11. Перечень действий, производимых Оператором
                                с&nbsp;полученными персональными данными
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                11.1. Оператор осуществляет сбор, запись,
                                систематизацию, накопление, хранение, уточнение
                                (обновление, изменение), извлечение,
                                использование, передачу (распространение,
                                предоставление, доступ), обезличивание,
                                блокирование, удаление и&nbsp;уничтожение
                                персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                11.2. Оператор осуществляет как
                                неавтоматизированную, так
                                и&nbsp;автоматизированную обработку персональных
                                данных с&nbsp;получением и/или передачей
                                полученной информации
                                по&nbsp;информационно-телекоммуникационным сетям
                                или без таковой.
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                12. Кому могут быть переданы персональные данные
                                Пользователя
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                Оператор может передавать персональные данные
                                Пользователей:
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                12.1. аффилированным лицам Оператора.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                12.2. любому компетентному правоохранительному,
                                регулирующему или иному государственному органу,
                                суду если такая передача персональных данных
                                необходима: (i) в&nbsp;соответствии
                                с&nbsp;применимым правом или подзаконным актом,
                                (ii) для осуществления, установления или защиты
                                законных прав Оператора, или (iii) для защиты
                                жизненно важных интересов, как Пользователя, так
                                и&nbsp;любого другого ,лица. Вышеназванные
                                действия осуществляются в&nbsp;соответствии
                                с&nbsp;требованиями законодательства Российской
                                Федерации.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                12.3. лицам и&nbsp;компаниям вне Оператора,
                                которые предоставляют услуги для нас
                                и&nbsp;обрабатывают персональные данные
                                от&nbsp;нашего имени при предоставлении этих
                                услуг (например, хостинг-провайдеры, службы
                                поддержки, компании, предоставляющие услуги
                                атрибуции, службы управления социальными сетями,
                                службы безопасности, службы оптимизации, службы
                                рассылки, маркетинговые и&nbsp;рекламные
                                агентства, службы аналитики, сервисы,
                                увеличивающие функциональность услуг,
                                и&nbsp;иные сервисы, помогающие нам развиваться
                                и&nbsp;управлять нашими Услугами).
                            </Paragraph.P1Long>
                        </div>
                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                13. Трансграничная передача персональных данных
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                13.1. Оператор до&nbsp;начала осуществления
                                трансграничной передачи персональных данных
                                обязан убедиться в&nbsp;том, что иностранным
                                государством, на&nbsp;территорию которого
                                предполагается осуществлять передачу
                                персональных данных, обеспечивается надежная
                                защита прав субъектов персональных данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                13.2. Трансграничная передача персональных
                                данных на&nbsp;территории иностранных
                                государств, не&nbsp;отвечающих вышеуказанным
                                требованиям, может осуществляться только
                                в&nbsp;случае наличия согласия в&nbsp;письменной
                                форме субъекта персональных данных
                                на&nbsp;трансграничную передачу его персональных
                                данных и/или исполнения договора, стороной
                                которого является субъект персональных данных.
                            </Paragraph.P1Long>
                        </div>

                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                14. Конфиденциальность персональных данных
                            </Heading.H2small>

                            <Paragraph.P1Long>
                                Оператор и&nbsp;иные лица, получившие доступ
                                к&nbsp;персональным данным, обязаны
                                не&nbsp;раскрывать третьим лицам
                                и&nbsp;не&nbsp;распространять персональные
                                данные без согласия субъекта персональных
                                данных, если иное не&nbsp;предусмотрено
                                федеральным законом.
                            </Paragraph.P1Long>
                        </div>

                        <div className="privacy-page__block">
                            <Heading.H2small className="privacy-page__block--heading">
                                15. Заключительные положения. Как связаться
                                с&nbsp;Оператором.
                            </Heading.H2small>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                15.1. Пользователь может получить любые
                                разъяснения по&nbsp;интересующим вопросам,
                                касающимся обработки его персональных данных,
                                обратившись к&nbsp;Оператору с&nbsp;помощью
                                электронной почты personaldata@redmadrobot.com;
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                &mdash;&nbsp;В&nbsp;случае выявления неточностей
                                в&nbsp;персональных данных, для актуализации
                                персональных данных необходимо направить письмо
                                на&nbsp;адрес personaldata@redmadrobot.com
                                с&nbsp;пометкой &laquo;Актуализация персональных
                                данных&raquo;;
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                &mdash;&nbsp;для отзыва согласия
                                на&nbsp;обработку персональных данных,
                                необходимо направить письмо на&nbsp;адрес
                                электронной почты personaldata@redmadrobot.com
                                с&nbsp;пометкой &laquo;Отзыв согласия
                                на&nbsp;обработку персональных данных&raquo;;
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                15.2. В&nbsp;данном документе будут отражены
                                любые изменения политики обработки персональных
                                данных Оператором. Политика действует бессрочно
                                до&nbsp;замены ее&nbsp;новой версией.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                15.3. Во&nbsp;исполнение
                                требований&nbsp;ч.&nbsp;2&nbsp;ст.&nbsp;18.1
                                Закона о&nbsp;персональных данных актуальная
                                версия Политики в&nbsp;свободном доступе
                                расположена в&nbsp;сети Интернет по&nbsp;адресу
                                https://redmadrobot.ru/privacy.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--date">
                                Редакция от&nbsp;16&nbsp;августа 2021г.
                            </Paragraph.P1Long>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

PrivacyPage.propTypes = {};
PrivacyPage.layout = "L3";

export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl("privacy"));

        await Promise.allSettled([
            store.dispatch(initSidebar()),
            store.dispatch(initTags()),
        ]);
    }
);

export default PrivacyPage;
