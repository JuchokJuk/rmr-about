import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useBreakpoint } from "@helpers/useBreakpoint";
import TabsContent from "./TabsContent";
import "./style.less";
import Layout from "@components/Layouts/Layout";

const Tabs = () => {
    const breakpoint = useBreakpoint();
    const [stickyHeaderIndentBottom, setStickyHeaderIndentBottom] = useState(0);

    const headerRef = useSelector((state) => state.header);
    let stickyHeaderIndentTop = 0;
    const gapFix = 10; // сквозь щель между хедерами видно буквы

    const tabsHeaderRef = useRef();
    const tabsContentRef = useRef();
    const [currentTab, setCurrentTab] = useState(0);

    function setupSticky() {
        const headerHeight = document.getElementById('r-header')
        stickyHeaderIndentTop =
            headerHeight.offsetHeight - gapFix;
        switch (breakpoint) {
            case "max":
                setStickyHeaderIndentBottom(50);
                break;
            case 0:
                setStickyHeaderIndentBottom(53);
                break;
            case 1:
                setStickyHeaderIndentBottom(18);
                break;
            case 2:
                setStickyHeaderIndentBottom(12);
                break;
            case 3:
                setStickyHeaderIndentBottom(23);
                break;
        }
        tabsHeaderRef.current.style.width =
            tabsContentRef.current?.offsetWidth + "px";

        tabsContentRef.current.style.paddingTop =
            stickyHeaderIndentBottom +
            tabsHeaderRef.current?.offsetHeight +
            gapFix +
            "px";
    }
    function toggleSticky() {
        const tabsContent = tabsContentRef.current;
        const tabsHeader = tabsHeaderRef.current;
        const sectionOffset = tabsContent.getBoundingClientRect();
        const lastTab = tabsContent.lastElementChild;

        const topBound = stickyHeaderIndentTop;
        const bottomBound =
            lastTab.offsetHeight +
            tabsHeader.offsetHeight +
            stickyHeaderIndentBottom +
            stickyHeaderIndentTop;

        if (
            sectionOffset.top <= topBound &&
            sectionOffset.bottom >= bottomBound
        ) {
            stick();
        } else {
            if (sectionOffset.bottom <= bottomBound) {
                unstickToBottom();
            } else {
                unstickToTop();
            }
        }

        function stick() {
            tabsHeader.style.position = "fixed";
            tabsHeader.style.top = stickyHeaderIndentTop + "px";
            tabsHeader.style.bottom = "unset";
        }
        function unstickToTop() {
            tabsHeader.style.position = "absolute";
            tabsHeader.style.top = 0;
            tabsHeader.style.bottom = "unset";
        }
        function unstickToBottom() {
            tabsHeader.style.position = "absolute";
            tabsHeader.style.top = "unset";
            tabsHeader.style.bottom =
                lastTab.offsetHeight + stickyHeaderIndentBottom + "px";
        }
    }
    function getCurrentTab() {
        let tabs = tabsContentRef.current?.children;
        const headerHeight = document.getElementById('r-header')
        let targetY =
            tabsHeaderRef.current?.offsetHeight +
            headerHeight.offsetHeight +
            stickyHeaderIndentBottom;

        for (let i = 0; i < tabs.length; i++) {
            let tabY = tabs[i].getBoundingClientRect().bottom;

            const difference = tabY - targetY;
            if(difference > 0){
                setCurrentTab(i);
                break;
            }
        }
    }
    function scrollToTab(tabIndex) {
        const headerHeight = document.getElementById('r-header')
        const yOffset = -(
            tabsHeaderRef.current?.offsetHeight +
            headerHeight.offsetHeight +
            stickyHeaderIndentBottom
        );
        const element = tabsContentRef.current?.children[tabIndex];
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }

    useEffect(() => {
        setupSticky();
        window.addEventListener("resize", setupSticky);

        toggleSticky();
        window.addEventListener("resize", toggleSticky);
        window.addEventListener("scroll", toggleSticky);

        getCurrentTab();
        window.addEventListener("resize", getCurrentTab);
        window.addEventListener("scroll", getCurrentTab);
        return () => {
            window.removeEventListener("resize", setupSticky);
            window.removeEventListener("resize", toggleSticky);
            window.removeEventListener("scroll", toggleSticky);
            window.removeEventListener("resize", getCurrentTab);
            window.removeEventListener("scroll", getCurrentTab);
        };
    });

    const doubleActive = currentTab === 1 || currentTab === 2;

    return (
        <Layout>
            <div className="inset">
                <div className="inset__header header-nav" ref={tabsHeaderRef}>
                    <div
                        className={
                            currentTab === 0
                                ? "header-nav__item header-nav__item--active"
                                : "header-nav__item"
                        }
                        onClick={() => scrollToTab(0)}
                    >
                        {breakpoint >= 3 ? "1_" : ""}Идея
                    </div>
                    <div className="incubation">
                        <div
                            className={
                                currentTab === 1
                                    ? "incubation__item incubation__item_left incubation__item--active"
                                    : "incubation__item incubation__item_left"
                            }
                            onClick={() => scrollToTab(1)}
                        >
                            <span
                                className={
                                    doubleActive
                                        ? "incubation__item--double"
                                        : ""
                                }
                            >
                                {breakpoint >= 3 ? "2_" : ""}Инкубация
                            </span>
                        </div>
                        <div
                            className={
                                currentTab === 2
                                    ? "incubation__item incubation__item--active"
                                    : "incubation__item incubation__item_right"
                            }
                            onClick={() => scrollToTab(2)}
                        ></div>
                    </div>
                    <div
                        className={
                            currentTab === 3
                                ? "header-nav__item header-nav__item--active"
                                : "header-nav__item"
                        }
                        onClick={() => scrollToTab(3)}
                    >
                        {breakpoint >= 3 ? "3_" : ""}Акселерация
                    </div>
                    <div
                        className={
                            currentTab === 4
                                ? "header-nav__item header-nav__item--active"
                                : "header-nav__item"
                        }
                        onClick={() => scrollToTab(4)}
                    >
                        {breakpoint >= 3 ? "4_" : ""}Масштабирование
                    </div>
                </div>
                <div className="tab-content" ref={tabsContentRef}>
                    <TabsContent />
                </div>
            </div>
        </Layout>
    );
};

export default Tabs;
