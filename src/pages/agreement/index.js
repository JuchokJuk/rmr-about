import { initTags, setSelectedUrl } from "@store/tags/tagsAction";
import { initSidebar } from "@store/sidebar/sidebarAction";
import Paragraph from "@components/Styles/Paragraph";
import PixelArrow from "@assets/pixelArrowLeft.svg";
import Wrapper from "@components/SiteGrid/Wrapper";
import Heading from "@components/Styles/Heading";
import { storeWrapper } from "@store/store";
import Seo from "@components/Seo";
import React from "react";
import router from "next/router";

const AgreementPage = () => {
    const host = process.env.NEXT_PUBLIC_SITE_URL + "agreement";
    const goBack = () => {
        router.push("/");
    };
    let state = {
        data: {
            seo: {},
            currentUrl: host,
        },
    };

    return (
        <>
            <Seo
                seo={state.data.seo}
                ogUrl={state.data.currentUrl}
                componentName={"agreement"}
            />
            <Wrapper>
                <div className="privacy-page agreement">
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
                        Согласие на&nbsp;обработку персональных данных
                    </Heading.H1new>

                    <div className="privacy-page__content">
                        <div className="privacy-page__block">
                            <Paragraph.P1Long className="privacy-page__block--description">
                                Настоящим, в&nbsp;соответствии
                                с&nbsp;Федеральным законом от&nbsp;27.07.2006
                                &#8470;&nbsp;152-ФЗ &laquo;О&nbsp;персональных
                                данных&raquo;, вы&nbsp;подтверждаете свое
                                согласие на&nbsp;обработку Обществом
                                с&nbsp;ограниченной ответственностью
                                &laquo;РЭДМЭДРОБОТ МСК&raquo; юридический адрес:
                                123557, г. Москва, ул. Пресненский Вал, д.27,
                                стр.9, в&nbsp;том числе Группе компаний
                                Redmadrobot (аффилированные лица ООО
                                &laquo;РЭДМЭДРОБОТ МСК&raquo;,
                                далее&nbsp;&mdash; Redmadrobot) ваших
                                (далее&nbsp;&mdash; Пользователь) персональных
                                данных.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                Настоящим согласием вы&nbsp;подтверждаете, что
                                проинформированы о&nbsp;том, что под обработкой
                                персональных данных понимаются действия
                                с&nbsp;персональными данными, определенные
                                в&nbsp;Федеральном законе &#8470;&nbsp;152-ФЗ
                                от&nbsp;27.07.2006 &laquo;О&nbsp;персональных
                                данных&raquo;, а&nbsp;именно: сбор, запись,
                                систематизация, накопление, хранение, уточнение
                                (обновление, изменение), извлечение,
                                использование, передача (предоставление,
                                доступ), блокирование, удаление персональных
                                данных, совершаемые Redmadrobot
                                с&nbsp;использованием средств автоматизации или
                                без использования таких средств.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                Данным согласием вы&nbsp;подтверждаете, что
                                проинформированы о&nbsp;том, что обработка
                                предоставляемых вами персональных данных может
                                осуществляется для достижения следующих целей:
                            </Paragraph.P1Long>
                            <div className="privacy-page__list">
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
                                    кандидатов на&nbsp;работу
                                    в&nbsp;Redmadrobot;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для ответов на&nbsp;запросы
                                    Пользователя, направленные через сайт
                                    https://redmadrobot.ru/ или
                                    на&nbsp;корпоративную почту;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для организации различных
                                    мероприятий (семинаров, воркшопов
                                    и&nbsp;тд);
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;для соблюдения законных
                                    обязательств Redmadrobot;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;чтобы осуществлять,
                                    устанавливать или защищать законные права
                                    Redmadrobot, а&nbsp;также для защиты
                                    жизненно важных интересов, как Пользователя,
                                    так и&nbsp;других лиц;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;при наличии согласия
                                    Пользователя Redmadrobot может также
                                    обрабатывать данные Пользователей для
                                    дополнительных целей.
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    Настоящее согласие распространяется
                                    на&nbsp;следующие персональные данные:
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;фамилия, имя отчество;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;электронный адрес;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;адрес;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;номера телефонов;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;место работы, должность;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;корреспонденцию или
                                    ее&nbsp;копии, в&nbsp;случае обращения
                                    Пользователя в&nbsp;Redmadrobot;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;пройденные Пользователем
                                    опросы;
                                </Paragraph.P1Long>

                                <Paragraph.P1Long className="privacy-page__list--item">
                                    &mdash;&nbsp;данные об&nbsp;устройстве
                                    Пользователя, такие как его название
                                    и&nbsp;операционная система, тип браузера,
                                    язык устройства, производитель, информация
                                    о&nbsp;сети, информация об&nbsp;операторе
                                    связи, а&nbsp;также иные доступные
                                    технические данные.
                                </Paragraph.P1Long>
                            </div>
                            <Paragraph.P1Long className="privacy-page__block--description">
                                Срок действия Вашего согласия ограничен сроком,
                                требующимся для достижения цели обработки
                                персональных данных, если иной срок хранения
                                персональных данных не&nbsp;установлен
                                действующим законодательством, однако,
                                Вы&nbsp;вправе в&nbsp;любой момент отозвать
                                настоящее согласие, путём направления
                                письменного уведомления на&nbsp;электронный
                                адрес: personaldata@redmadrobot.com
                                с&nbsp;пометкой &quot; Отзыв согласия
                                на&nbsp;обработку персональных данных&quot;.
                                Удаление ваших персональных данных будет
                                произведено Redmadrobot в&nbsp;течении
                                30&nbsp;дней с&nbsp;момента получения данного
                                уведомления.
                            </Paragraph.P1Long>

                            <Paragraph.P1Long className="privacy-page__block--description">
                                Redmadrobot гарантирует соблюдение следующих
                                прав субъекта персональных данных: право
                                на&nbsp;получение сведений о&nbsp;том, какие
                                персональные данные субъекта персональных данных
                                хранятся у&nbsp;Redmadrobot; право
                                на&nbsp;удаление, уточнение или исправление
                                хранящихся у&nbsp;Redmadrobot персональных
                                данных; иные права, установленные действующим
                                законодательством Российской Федерации.
                            </Paragraph.P1Long>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

AgreementPage.propTypes = {};
AgreementPage.layout = "L3";
export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl("agreement"));

        await Promise.allSettled([
            store.dispatch(initSidebar()),
            store.dispatch(initTags()),
        ]);
    }
);

export default AgreementPage;
