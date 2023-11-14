import CardContacts from "../../components/CardContacts";
import { setSelectedUrl } from "@store/tags/tagsAction";
import { useBreakpoint } from "@helpers/useBreakpoint";
import { dataOffices } from "../../assets/dataOffices";
import React, { useEffect, useState } from "react";
import Wrapper from "@components/SiteGrid/Wrapper";
import IconCopy from "@assets/contacts/copy.svg";
import Prism from "@components/AboutPage/Prism";
import Snackbar from "@components/Snackbar";
import { storeWrapper } from "@store/store";
import Seo from "@components/Seo/index";
import "./Contacts.less";
import { useSelector } from "react-redux";

import Mailing from "@components/Mailing";


const Contacts = () => {
    const [showWindowSuccess, setShowWindowSuccess] = useState(false);
    const [typeMessage, setTypeMessage] = useState("");
    const host = process.env.NEXT_PUBLIC_SITE_URL;
    const currentUrl = `${host}contacts`;
    const breakpoint = useBreakpoint();
    const xl = breakpoint === 0 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";

    const copy = async (item, type) => {
        setShowWindowSuccess(true);
        setTypeMessage(type);
        navigator.clipboard.writeText(item);
    };

    const handleSnackBar = () => {
        setShowWindowSuccess(false);
    };
    useEffect(() => {
        if (!showWindowSuccess) return;
        const delay = () => {
            setTimeout(() => setShowWindowSuccess(false), 3000);
        };
        delay();
        clearTimeout(delay);
    }, [showWindowSuccess]);
    const mailingHeader = useSelector(
        (state) => state.modals.emailingHeader.display
    );
    return (
        <div
            className={

                 mailingHeader
                    ? "contacts-page contacts-page-show-mailing-header"
                    :  "contacts-page"

            }
        >
            <Seo ogUrl={currentUrl} componentName={"contacts"} />
            <Wrapper>
                <div className="contacts-page__main main-contact">
                    <div className="main-contact--name">Контакты</div>
                    <div className="main-contact__blockInfo blockInfo">
                        <div className="blockInfo__description">
                            red_mad_robot — группа компаний, каждая из которых
                            является экспертом в своей области. Мы запускаем
                            цифровые сервисы, проектируем UX/{xl}
                            {md}UI, решаем задачи бизнеса с помощью машинного
                            обучения и создания положительного пользовательского
                            опыта, {sm}и проводим {md}
                            мероприятия в сфере образования.
                        </div>
                        <div className="blockInfo__contacts">
                            <div className="blockInfo__contacts--block">
                                <div className="blockInfo__contacts--item">
                                    <a
                                        className="blockInfo__phone"
                                        href="tel:+7 (495) 933-05-95"
                                    >
                                        +7 (495) 933-05-95
                                    </a>
                                    <IconCopy
                                        className="contacts-page__iconCopy"
                                        onClick={() =>
                                            copy("+7 (495) 933-05-95", "phone")
                                        }
                                    />
                                </div>
                                <div className="blockInfo__contacts--description">
                                    Приятный металлический голос на проводе.
                                </div>
                            </div>
                            <div className="blockInfo__contacts--block">
                                <div className="blockInfo__contacts--item">
                                    <a
                                        href="mailto:hello@redmadrobot.com"
                                        className="blockInfo__email"
                                    >
                                        hello@redmadrobot.com
                                    </a>
                                    <IconCopy
                                        className="contacts-page__iconCopy"
                                        onClick={() =>
                                            copy(
                                                "hello@redmadrobot.com",
                                                "email"
                                            )
                                        }
                                    />
                                </div>
                                <div className="blockInfo__contacts--description">
                                    Мы любим, когда нам пишут. Пишите больше!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {dataOffices.map((company) => {
                    return (
                        <div key={company.id}>
                            <div className="contacts-page__line" />
                            <CardContacts data={company} onCange={copy} />
                        </div>
                    );
                })}
                <Prism />
            </Wrapper>
            <div className="contacts-page__mailingList">
                <div className="contacts-page__mailingList--content">
                    <Mailing labelGA="NewsletterSubscribeContacts" />
                </div>
            </div>
            <Snackbar visibility={showWindowSuccess} onChange={handleSnackBar}>
                {typeMessage === "phone"
                    ? "Номер телефона скопирован"
                    : "Email скопирован"}
            </Snackbar>
        </div>
    );
};
Contacts.layout = "L3";
export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl("contacts"));
    }
);

export default Contacts;
