import Arrow from "@assets/NewAbout/DoubleArrow.svg";
import { useEffect, useRef, useState } from "react";
import FakeBg from "../FakeBg/FakeBg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.less";
import { useBreakpoint } from "@helpers/useBreakpoint";
import waitForScrollEnd from "@helpers/slider/waitForScrollEnd";
import { setPlayBlock } from "@store/about/aboutAction";
import { logEvent } from "@helpers/metrics";

const Navbar = ({
    bigBusiness,
    heroSlider,
    taskForm,
    products,
    digital,
    awards,
    start,
    tabs,
}) => {
    const slidersObjects = useSelector((state) => state.scrollBlocker);
    const dispatch = useDispatch();

    const scroll = (block, label) => {
        for (let sliderObject of slidersObjects) {
            sliderObject.stopScrollBlocking();
        }
        logEvent(label);
        // false
        // dispatch(setPlayBlock(false));
        const header = document.getElementsByClassName("r-header");
        const heightHeader = header[0].offsetHeight + 10;

        window.scrollTo({
            top:
                block == start || block == heroSlider || block == bigBusiness
                    ? block.current.getBoundingClientRect().top + window.scrollY
                    : block.current.getBoundingClientRect().top +
                      window.scrollY -
                      heightHeader,
            behavior: "smooth",
        });

        waitForScrollEnd(() => {
            // true
            // dispatch(setPlayBlock(true));
            for (let sliderObject of slidersObjects) {
                sliderObject.startScrollBlocking();
            }
        });
    };

    // определение положения блока на странице при скролле
    const [activeLink, setActiveLink] = useState("");
    const blocks = [
        heroSlider,
        taskForm,
        products,
        digital,
        awards,
        start,
        tabs,
        bigBusiness,
    ];
    const searchLocation = (block) => {
        let options = {};
        if (block === bigBusiness.current) {
            options = {
                threshold: [0.1],
            };
        } else {
            options = {
                threshold: [0.2, 0.5, 0.8],
            };
        }

        // const observer = new IntersectionObserver((entries) => {
        //     const entry = entries[0];
        //     if (entry.isIntersecting) {
        //         setActiveLink(entry.target.id);
        //     }
        // }, options);
        // observer.observe(block);
    };

    useEffect(() => {
        blocks.forEach((item) => searchLocation(item?.current));
    }),
        [activeLink];

    const refNavbar = useRef(null);
    const [opened, setOpened] = useState(false);

    function handler() {
        logEvent("MenuClickOpen");
        setOpened(!opened);
    }
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    return (
        <React.Fragment>
            <div
                className={opened ? "navbar navbar--active" : "navbar"}
                id="navbar"
                ref={refNavbar}
            >
                <div className="navbar__btn-placer">
                    <div className="navbar__btn-container">
                        <div className="navbar__btn" onClick={handler}>
                            <Arrow className="navbar__icon" />
                        </div>
                        <FakeBg />
                    </div>
                </div>
                <div className="navbar__panel panel">
                    <div
                        className={
                            activeLink === "heroSlider"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(heroSlider, "MenuClickWhatWeDo")}
                    >
                        Что мы делаем
                    </div>
                    <div
                        className={
                            activeLink === "start"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(start, "MenuClickStory")}
                    >
                        Как всё начиналось
                    </div>
                    <div
                        className={
                            activeLink === "tabs"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(tabs, "MenuClickDigServ")}
                    >
                        Как мы создаем{xl} цифровые{maxXl}
                        {md} сервисы
                    </div>
                    <div
                        className={
                            activeLink === "products"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(products, "MenuClickProd")}
                    >
                        Какие продукты мы {maxXl}
                        {xl}
                        {lg}
                        {md} запустили
                    </div>
                    <div
                        className={
                            activeLink === "awards"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(awards, "MenuClickAwards")}
                    >
                        Чем нас наградили
                    </div>
                    <div
                        className={
                            activeLink === "bigBusiness"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() =>
                            scroll(bigBusiness, "MenuClickDigTransf")
                        }
                    >
                        Как мы помогаем {maxXl}
                        {xl}
                        {lg}
                        {md} в цифровой {xl}
                        {lg} трансформации
                    </div>
                    <div
                        className={
                            activeLink === "digital"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(digital, "MenuClickInvest")}
                    >
                        Во что мы инвестируем
                    </div>
                    <div
                        className={
                            activeLink === "taskForm"
                                ? "panel__item panel__item--active"
                                : "panel__item"
                        }
                        onClick={() => scroll(taskForm, "MenuClickContactUs")}
                    >
                        Обсудим?
                    </div>
                </div>
                <FakeBg />
            </div>
        </React.Fragment>
    );
};
export default Navbar;
