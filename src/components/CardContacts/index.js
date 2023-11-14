import IconArrow from "@assets/NewAbout/ArrowRight.svg";
import IconCopy from "@assets/contacts/copy.svg";
import "./style.less";
const CardContacts = ({ data, onCange }) => {
    return (
        <div className="contacts-page__card contacts-card">
            <div className="contacts-card__info">
                <div className="contacts-card__info--name">
                    {data.nameCompany}
                </div>
                <div className="contacts-card__info--description">
                    {data.description}
                </div>
                <div className="contacts-card__emailAndSite">
                    <div className="contacts-card__info--emailBlock">
                        <a
                            className="info__email"
                            id="contactsEmail"
                            href={`mailto:${data.email}`}
                        >
                            {data.email}
                        </a>
                        <IconCopy
                            className="contacts-page__iconCopy  contacts-page__iconCopyCard"
                            onClick={() => onCange(data.email, "email")}
                        />
                    </div>
                    {data.href && (
                        <div className="contacts-card__info--site">
                            <a
                                className="contacts-card__info--siteText"
                                target="_blank"
                                href={data.href}
                            >
                                Перейти на сайт
                                <IconArrow className="contacts-card__info--iconArrow" />
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <div className="contacts-card__office">
                <div className="contacts-card__office--name">
                    {data.textOffices ? "Офисы" : "Офис"}
                </div>
                <div className="officeBlock">
                    {data.offices.map((office) => {
                        return (
                            <div className="officeBlock__item" key={office.id}>
                                <div className="officeBlock__item--name">
                                    {office.nameCity}
                                </div>
                                <div className="officeBlock__item--address">
                                    {office.address}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default CardContacts;
