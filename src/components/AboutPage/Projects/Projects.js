import { useBreakpoint } from "@helpers/useBreakpoint";
import Carousel from "@components/Carousel";
import { useEffect, useState } from "react";
import Layout from "@components/Layouts/Layout";
import Card from "./Card/Card";
import "./style.less";
import SimpleCarousel from "@components/SimpleCarousel";

const arrCarts = [
    {
        id: 1,
        img: "/images/NewAbout/Case/Alfa.png",
        directions: [
            "Финтех",
            "Запуск продукта с нуля",
            "Консалтинг",
            "Дизайн",
            "Разработка",
        ],
        keys: [
            "all",
            "fintech",
            "startProduct",
            "consulting",
            "design",
            "develop",
        ],
        nameCart: "Альфа-Банк Казахстан",
        description: "Экосистема нефинансовых сервисов для юридических лиц",
    },
    {
        id: 2,
        img: "/images/NewAbout/Case/Vostok.png",
        directions: [
            "E-commerce",
            "Стриминг",
            "Маркетплейс",
            "Запуск продукта с нуля",
            "Консалтинг",
            "Дизайн",
            "Разработка",
        ],
        keys: [
            "all",
            "ecom",
            "streaming",
            "marketplace",
            "startProduct",
            "consulting",
            "design",
            "develop",
        ],
        nameCart: "NDA. Один из топ-5 банков РФ",
        description: "Инновационный маркетплейс в связке с экосистемой банка",
    },

    {
        id: 3,
        img: "/images/NewAbout/Case/RTC.png",
        directions: [
            "Недвижимость",
            "Видеонаблюдение",
            "Умный дом",
            "Сервис-дизайн",
            "Дизайн",
            "Разработка",
        ],
        keys: [
            "all",
            "realty",
            "cctv",
            "smartHouse",
            "serviceDesign",
            "design",
            "develop",
        ],
        nameCart: "Ростелеком",
        description:
            "Сервис для управления и контроля квартиры и территории ЖК",
    },
    {
        id: 4,
        img: "/images/NewAbout/Case/Rgs.png",
        directions: ["Промышленность", "Дизайн"],
        keys: ["all", "industry", "design"],
        nameCart: "НЛМК",
        description: "Платформа для повышения эффективности производства",
    },
    {
        id: 5,
        img: "/images/NewAbout/Case/Soglasie.png",
        directions: ["Страхование", "Дизайн", "Разработка"],
        keys: ["all", "insurance", "design", "develop"],
        nameCart: "Согласие Страхование",
        description:
            "Приложение для страхового осмотра автомобилей и недвижимости",
    },
    {
        id: 6,
        img: "/images/NewAbout/Case/Shkolnik.png",
        directions: ["Образование", "Сервис-дизайн", "Дизайн", "Разработка"],
        keys: ["all", "education", "serviceDesign", "design", "develop"],
        nameCart: "Министерство Цифровой Трансформации Татарстана",
        description: "Цифровой помощник в учёбе для 450 школьников",
    },
    {
        id: 7,
        img: "/images/NewAbout/Case/SF.png",
        directions: [
            "NFT-биржа",
            "Блокчейн",
            "Маркетплейс",
            "Дизайн",
            "Разработка",
        ],
        keys: ["all", "nft", "marketplace", "blockchain", "design", "develop"],
        nameCart: "NDA. NFT-стартап",
        description: "Площадка для создания и распространения NFT",
    },
    {
        id: 8,
        img: "/images/NewAbout/Case/WorldSkills 50+.png",
        directions: ["Образование", "Дизайн", "Разработка"],
        keys: ["all", "education", "design", "develop"],
        nameCart: "WorldSkills Russia",
        description:
            "Платформа для профессионального долголетия Навыки мудрых ",
    },
    {
        id: 9,
        img: "/images/NewAbout/Case/Wclass.png",
        directions: [
            "Лайфстайл",
            "Фиттех",
            "Дизайн",
            "Разработка",
            "Запуск продукта с нуля",
        ],
        keys: [
            "all",
            "lifestyle",
            "fittech",
            "startProduct",
            "design",
            "develop",
        ],
        nameCart: "Топ-3 фитнес-корпорация в РФ",
        description: "Fit-tech-сервис для поддержания здорового образа жизни",
    },
    {
        id: 10,
        img: "/images/NewAbout/Case/Neftmagistral.png",
        directions: [
            "Услуги",
            "АЗС",
            "Программа лояльности",
            "Дизайн",
            "Сервис-дизайн",
        ],
        keys: [
            "all",
            "services",
            "gasStation",
            "loyalty",
            "design",
            "serviceDesign",
        ],
        nameCart: "АЗС Нефтьмагистраль",
        description:
            "Многофункциональный сервис все в одном: заправиться, помыться, поесть",
    },
];
const Projects = () => {
    const [topSort, setTopSort] = useState([
        { text: "Все отрасли", filter: "all", disabled: false },
        { text: "Финтех", filter: "fintech", disabled: false },
        { text: "E-commerce", filter: "ecom", disabled: false },
        { text: "Стриминг", filter: "streaming", disabled: false },
        { text: "Недвижимость", filter: "realty", disabled: false },
        { text: "Видеонаблюдение", filter: "cctv", disabled: false },
        { text: "Умный дом", filter: "smartHouse", disabled: false },
        { text: "Промышленность", filter: "industry", disabled: false },
        { text: "Страхование", filter: "insurance", disabled: false },
        { text: "Образование", filter: "education", disabled: false },
        { text: "NFT-биржа", filter: "nft", disabled: false },
        { text: "Блокчейн", filter: "blockchain", disabled: false },
        { text: "Маркетплейс", filter: "marketplace", disabled: false },
        { text: "Лайфстайл", filter: "lifestyle", disabled: false },
        { text: "Фиттех", filter: "fittech", disabled: false },
        { text: "Услуги", filter: "services", disabled: false },
        { text: "АЗС", filter: "gasStation", disabled: false },
        { text: "Программа лояльности", filter: "loyalty", disabled: false },
    ]);

    const [bottomSort, setBottomSort] = useState([
        { text: "Все направления", filter: "all", disabled: false },
        {
            text: "Запуск продукта с нуля",
            filter: "startProduct",
            disabled: false,
        },
        { text: "Консалтинг", filter: "consulting", disabled: false },
        { text: "Дизайн", filter: "design", disabled: false },
        { text: "Разработка", filter: "develop", disabled: false },
        { text: "Сервис-дизайн", filter: "serviceDesign", disabled: false },
    ]);

    const breakpoint = useBreakpoint();
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    const [carts, setCarts] = useState(arrCarts);
    const [activeTagIndustry, setActiveTagIndustry] = useState(topSort[0]);
    const [activeTagDirections, setActiveTagDirections] = useState(
        bottomSort[0]
    );

    const getKeys = (arr) => {
        const keys = [];
        arr.forEach((cart) => {
            keys.push(...cart.keys);
        });
        return keys;
    };

    useEffect(() => {
        const searchArr = arrCarts.filter((cart) =>
            activeTagDirections.filter === "all"
                ? cart.keys.includes(activeTagIndustry.filter)
                : cart.keys.includes(activeTagIndustry.filter) &&
                  cart.keys.includes(activeTagDirections.filter)
        );
        setCarts(searchArr);

        if (activeTagIndustry.filter === "all") {
            setBottomSort(
                bottomSort.map((tag) => ({ ...tag, disabled: false }))
            );
            return;
        }

        const arr = arrCarts.filter((cart) =>
            cart.keys.includes(activeTagIndustry.filter)
        );

        const newSort = bottomSort.map((tag) => {
            return {
                ...tag,
                disabled: !getKeys(arr).includes(tag.filter),
            };
        });
        setBottomSort(newSort);
    }, [activeTagIndustry]);

    useEffect(() => {
        const searchArr = arrCarts.filter((cart) =>
            activeTagIndustry.filter === "all"
                ? cart.keys.includes(activeTagDirections.filter)
                : cart.keys.includes(activeTagDirections.filter) &&
                  cart.keys.includes(activeTagIndustry.filter)
        );
        setCarts(searchArr);

        if (activeTagDirections.filter === "all") {
            setTopSort(topSort.map((tag) => ({ ...tag, disabled: false })));
            return;
        }

        const arr = arrCarts.filter((cart) =>
            cart.keys.includes(activeTagDirections.filter)
        );
        const newSort = topSort.map((tag) => {
            return {
                ...tag,
                disabled: !getKeys(arr).includes(tag.filter),
            };
        });
        setTopSort(newSort);
    }, [activeTagDirections]);

    const sortTop = topSort.map((item, index) => {
        return (
            <div
                className={
                    (activeTagIndustry.text == item.text
                        ? "sort__item sort__item--active"
                        : "sort__item") +
                    " " +
                    (item.disabled ? "sort__item--disabled" : "")
                }
                key={index}
                onClick={() => !item.disabled && setActiveTagIndustry(item)}
            >
                {item.text}
            </div>
        );
    });

    const sortBottom = bottomSort.map((item, index) => {
        return (
            <div
                onClick={() => !item.disabled && setActiveTagDirections(item)}
                className={
                    (activeTagDirections.text == item.text
                        ? "sort__item sort__item--active"
                        : "sort__item") +
                    " " +
                    (item.disabled ? "sort__item--disabled" : "")
                }
                key={index}
            >
                {item.text}
            </div>
        );
    });

    return (
        <div className="projects">
            <div className="projects__content">
                <Layout>
                    <div className="projects__name">
                        Выполнили более 100 проектов
                    </div>
                    <div className="projects__description">
                        В нашем портфеле много проектов, но здесь мы показываем
                        только самые новые {md} {sm} и интересные.
                    </div>
                </Layout>
                <div className="projects__sort sort">
                    <div className="sort__top">
                        {breakpoint < 3 || breakpoint === "max" ? (
                            <Layout>{sortTop}</Layout>
                        ) : (
                            <SimpleCarousel>{sortTop}</SimpleCarousel>
                        )}
                    </div>

                    <div className="sort__bottom">
                        {breakpoint < 3 || breakpoint === "max" ? (
                            <Layout>{sortBottom}</Layout>
                        ) : (
                            <SimpleCarousel>{sortBottom}</SimpleCarousel>
                        )}
                    </div>
                </div>
                <Layout>
                    {carts.length ? (
                        <div className="projects__carousel">
                            <Carousel>
                                {carts.map((item) => (
                                    <Card key={item.id} data={item} />
                                ))}
                            </Carousel>
                        </div>
                    ) : (
                        <div className="projects__noData">
                            По вашему запросу пока нет опубликованных кейсов.
                            Возможно, ваш будет первым? :){" "}
                            <span className="projects__noData--red">
                                Напишите нам!
                            </span>
                        </div>
                    )}
                </Layout>
            </div>
        </div>
    );
};

export default Projects;
