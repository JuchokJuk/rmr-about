import DigitalProducts from "@components/AboutPage/DigitalProducts";
import { initTags, setSelectedUrl } from "@store/tags/tagsAction";
import BigBusiness from "@components/AboutPage/BigBusiness";
import HeroSlider from "@components/AboutPage//HeroSlider";
import { initSidebar } from "@store/sidebar/sidebarAction";
import React, { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "@helpers/useBreakpoint";
import TaskForm from "@components/AboutPage/TaskForm";
import Projects from "@components/AboutPage/Projects";
import { setVideos, setVideosStatus } from "@store/about/aboutAction";
import Digital from "@components/AboutPage/Digital";
import Loader from "@components/AboutPage/Loader";
import Navbar from "@components/AboutPage/Navbar";
import Awards from "@components/AboutPage/Awards";
import Prism from "@components/AboutPage//Prism";
import Years from "@components/AboutPage/Years";
import Tabs from "@components/AboutPage/Tabs";
import { storeWrapper } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Custom404 from "@pages/404";
import Head from "next/head";
import "./about.less";
import PercentageLoad from "@helpers/percentageLoad";
import { createObjectURL } from "@helpers/functions";
import Seo from "@components/Seo";
import Mailing from "@components/Mailing";

const AboutPage = () => {
    const percentageLoad = new PercentageLoad();
    const dispatch = useDispatch();

    let state = useSelector((state) => state.about);
    let commonStatus = useSelector((state) => state.about.videosStatus.common);
    let desktopStatus = useSelector((state) => state.about.videosStatus.desktop);
    let tabletStatus = useSelector((state) => state.about.videosStatus.tablet);
    let storedVideos = useSelector((state) => state.about.videos);

    const bigBusiness = useRef("bigBusiness");
    const heroSlider = useRef("heroSlider");
    const products = useRef("products");
    const taskForm = useRef("taskForm");
    const digital = useRef("digital");
    const awards = useRef("awards");
    const start = useRef("start");
    const tabs = useRef("tabs");

    const commonEnpoints = [
        `/video/about/common/normal/planet.mp4`,
        `/video/about/common/reversed/r_planet.mp4`
    ];

    const endpointsForDesktop = [
        `/video/about/desktop/normal/d_cube_1.mp4`,
        `/video/about/desktop/reversed/r_d_cube_1.mp4`,

        `/video/about/desktop/normal/k_d_cube_2.mp4`,

        `/video/about/desktop/normal/d_cube_3.mp4`,
        `/video/about/desktop/reversed/r_d_cube_3.mp4`
    ];

    const endpointsForTablet = [
        `/video/about/tablet/normal/t_cube_1.mp4`,
        `/video/about/tablet/reversed/r_t_cube_1.mp4`,

        `/video/about/tablet/normal/k_t_cube_2.mp4`,

        `/video/about/tablet/normal/t_cube_3.mp4`,
        `/video/about/tablet/reversed/r_t_cube_3.mp4`
    ];

    const [commonVideos, setCommonVideos] = useState({ ...storedVideos.planet });
    const [tabletVideos, setTabletVideos] = useState({ ...storedVideos.tablet });
    const [desktopVideos, setDesktopVideos] = useState({ ...storedVideos.desktop });

    const breakpoint = useBreakpoint();
    const [videosBreakpoint, setVideosBreakpoint] = useState();

    const [progressTotal, setProgressTotal] = useState(0);

    const [commonAndTabletVideosDownloading, setCommonAndTabletVideosDownloading] = useState(false);
    const [commonAndDesktopVideosDownloading, setCommonAndDesktopVideosDownloading] = useState(false);
    const [tabletVideosDownloading, setTabletVideosDownloading] = useState(false);
    const [desktopVideosDownloading, setDesktopVideosDownloading] = useState(false);

    const [downloading, setDownloading] = useState(false)


    useEffect(() => {
        if (commonAndTabletVideosDownloading || commonAndDesktopVideosDownloading ||
            tabletVideosDownloading || desktopVideosDownloading) {
            setDownloading(true)
        } else {
            setDownloading(false)
        }
    }, [commonAndTabletVideosDownloading, commonAndDesktopVideosDownloading, tabletVideosDownloading, desktopVideosDownloading])

    useEffect(() => {
        if (breakpoint !== undefined) {
            if (breakpoint < 2 || breakpoint === "max") {
                setVideosBreakpoint("desktop");
            } else {
                setVideosBreakpoint("tablet");
            }
        }
    }, [breakpoint])

    function chooseVideosToLoad() {
        if (!downloading) {
            if (videosBreakpoint === 'desktop') {
                dispatch(setVideosStatus({ current: 'desktop' }))

                if (commonStatus && desktopStatus) {
                    setProgressTotal(100);
                    return
                }

                if (!commonStatus && !desktopStatus) {
                    getCommonAndDesktopVideos();
                } else if (commonStatus && !desktopStatus) {
                    getDesktopVideos()
                }
            }
            if (videosBreakpoint === 'tablet') {
                dispatch(setVideosStatus({ current: 'tablet' }))

                if (commonStatus && tabletStatus) {
                    setProgressTotal(100);
                    return
                }

                if (!commonStatus && !tabletStatus) {
                    getCommonAndTabletVideos();
                } else if (commonStatus && !tabletStatus) {
                    getTabletVideos()
                }

            }
        }
        else {
            percentageLoad.onLoad = chooseVideosToLoad;
        }
    }

    useEffect(() => {
        chooseVideosToLoad();
    }, [videosBreakpoint, commonStatus, desktopStatus, tabletStatus, downloading])

    async function getCommonAndTabletVideos() {
        setProgressTotal(0);
        setCommonAndTabletVideosDownloading(true)

        function setProgress(value) {
            setProgressTotal(value);
            if (value === 100) {
                dispatch(setVideosStatus({ common: true, tablet: true }))
                setCommonAndTabletVideosDownloading(false)
            }
        }

        const result = await percentageLoad.load([...commonEnpoints, ...endpointsForTablet], setProgress);

        const resultVideos = {
            planet: {
                normal: createObjectURL(new Blob([result[0]], { type: "video/mp4" })),
                reversed: createObjectURL(new Blob([result[1]], { type: "video/mp4" }))
            },
            tablet: {
                cube1: {
                    normal: createObjectURL(new Blob([result[2]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[3]], { type: "video/mp4" })),
                },
                cube2: {
                    normal: createObjectURL(new Blob([result[4]], { type: "video/mp4" })),
                },
                cube3: {
                    normal: createObjectURL(new Blob([result[5]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[6]], { type: "video/mp4" })),
                }
            }
        }
        setCommonVideos(resultVideos.planet);
        setTabletVideos(resultVideos.tablet);

        dispatch(setVideos(resultVideos));

    }

    async function getCommonAndDesktopVideos() {
        setProgressTotal(0);
        setCommonAndDesktopVideosDownloading(true)

        function setProgress(value) {
            setProgressTotal(value);
            if (value === 100) {
                dispatch(setVideosStatus({ common: true, desktop: true }))
                setCommonAndDesktopVideosDownloading(false)
            }
        }

        const result = await percentageLoad.load([...commonEnpoints, ...endpointsForDesktop], setProgress);
        const resultVideos = {
            planet: {
                normal: createObjectURL(new Blob([result[0]], { type: "video/mp4" })),
                reversed: createObjectURL(new Blob([result[1]], { type: "video/mp4" }))
            },
            desktop: {
                cube1: {
                    normal: createObjectURL(new Blob([result[2]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[3]], { type: "video/mp4" })),
                },
                cube2: {
                    normal: createObjectURL(new Blob([result[4]], { type: "video/mp4" })),
                },
                cube3: {
                    normal: createObjectURL(new Blob([result[5]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[6]], { type: "video/mp4" })),
                }
            }
        }
        setCommonVideos(resultVideos.planet);
        setDesktopVideos(resultVideos.desktop);

        dispatch(setVideos(resultVideos));
    }

    async function getTabletVideos() {
        setProgressTotal(0);
        setTabletVideosDownloading(true)

        function setProgress(value) {
            setProgressTotal(value);
            if (value === 100) {
                dispatch(setVideosStatus({ tablet: true }))
                setTabletVideosDownloading(false)
            }
        }

        const result = await percentageLoad.load(endpointsForTablet, setProgress);

        const resultVideos = {
            tablet: {
                cube1: {
                    normal: createObjectURL(new Blob([result[0]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[1]], { type: "video/mp4" })),
                },
                cube2: {
                    normal: createObjectURL(new Blob([result[2]], { type: "video/mp4" })),
                },
                cube3: {
                    normal: createObjectURL(new Blob([result[3]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[4]], { type: "video/mp4" })),
                }
            }
        }
        setTabletVideos(resultVideos.tablet);

        dispatch(setVideos(resultVideos));
    }

    async function getDesktopVideos() {
        setProgressTotal(0);
        setDesktopVideosDownloading(true)

        function setProgress(value) {
            setProgressTotal(value);
            if (value === 100) {
                dispatch(setVideosStatus({ desktop: true }))
                setDesktopVideosDownloading(false)
            }
        }

        const result = await percentageLoad.load(endpointsForDesktop, setProgress);

        const resultVideos = {
            desktop: {
                cube1: {
                    normal: createObjectURL(new Blob([result[0]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[1]], { type: "video/mp4" })),
                },
                cube2: {
                    normal: createObjectURL(new Blob([result[2]], { type: "video/mp4" })),
                },
                cube3: {
                    normal: createObjectURL(new Blob([result[3]], { type: "video/mp4" })),
                    reversed: createObjectURL(new Blob([result[4]], { type: "video/mp4" })),
                }
            }
        }

        setDesktopVideos(resultVideos.desktop);

        dispatch(setVideos(resultVideos));
    }

    const heroSliderDelayed = useSelector((state) => state.about.heroSliderDelayed);
    const bigBusinessDelayed = useSelector((state) => state.about.bigBusinessDelayed);
    const explosionDelayed = useSelector((state) => state.about.explosionDelayed);
    const slidesDelayed = useSelector((state) => state.about.slidesDelayed)

    let [videosDelayed, setVideosDelayed] = useState(false);

    useEffect(() => {
        setVideosDelayed(heroSliderDelayed && bigBusinessDelayed && explosionDelayed && slidesDelayed);
    }, [heroSliderDelayed, bigBusinessDelayed, explosionDelayed, slidesDelayed])

    function setTheme(theme) {
        document.documentElement.style.overflow = "hidden";
        document.body.clientWidth;
        document.documentElement.setAttribute("data-color-scheme", theme);
        document.documentElement.style.overflow = "";
    }

    useEffect(() => {
        // stop scroll at loading
        let requestId;
        if (!videosDelayed) {
            const loop = () => {
                // console.log('stop scroll')
                window.scrollTo({ top: 1000 });
                requestId = requestAnimationFrame(loop)
            }
            requestAnimationFrame(loop);

            document.body.style.overflowY = "hidden";
        } else {
            cancelAnimationFrame(requestId)
            // console.log('start scroll !!!!!!!!!')
            document.body.style.overflowY = null;
        }
        return () => {
            // console.log('scroll clean up')
            cancelAnimationFrame(requestId)
        }
    }, [videosDelayed]);

    function returnToHeroSlider() {
        if (window.scrollY < 1000) {
            window.scrollTo({ top: 1000 });
        }
    }

    useEffect(() => {
        setTheme("dark");
        window.addEventListener('scroll', returnToHeroSlider);
        document.body.style.overscrollBehaviourY = "contain";
        return () => {
            setTheme("light");
            window.removeEventListener('scroll', returnToHeroSlider);
            document.body.style.overflowY = null;
            document.body.style.overscrollBehaviourY = "unset";
        }
    }, [])
    const host = process.env.NEXT_PUBLIC_SITE_URL;
    const currentUrl = `${host}contacts`;

    if (state.isRejected) {
        return (
            <React.Fragment>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <Custom404 />
            </React.Fragment>
        );
    }

    return (
        <div className="about">
            <Seo ogUrl={currentUrl} componentName={"about"} />
            {progressTotal < 100 || !videosDelayed ? (
                <Loader count={Math.round(progressTotal)} />
            ) : null}
            <Navbar
                bigBusiness={bigBusiness}
                heroSlider={heroSlider}
                taskForm={taskForm}
                products={products}
                digital={digital}
                awards={awards}
                start={start}
                tabs={tabs}
            />
            <div id="heroSlider" ref={heroSlider}>
                <HeroSlider videos={commonVideos} />
            </div>

            <div id="start" ref={start}>
                <Years />
            </div>
            <div id="tabs" ref={tabs}>
                <DigitalProducts />
            </div>
            <Tabs />
            <div id="products" ref={products}>
                <Projects />
            </div>
            <div id="awards" ref={awards}>
                <Awards />
            </div>
            <div id="bigBusiness" ref={bigBusiness}>
                <BigBusiness
                    videos={
                        breakpoint < 2 || breakpoint === "max"
                            ? desktopVideos
                            : tabletVideos
                    }
                />
            </div>
            <div id="digital" ref={digital}>
                <Digital />
            </div>
            <div id="taskForm" ref={taskForm}>
                <TaskForm />
            </div>
            <Prism />
            <div className="about__mailingList">
                <div className="about__mailingList--content">
                    <Mailing labelGA="NewsletterSubscribeCompany" />
                </div>
            </div>
        </div>
    );
};

AboutPage.layout = "L2";

AboutPage.propTypes = {
    scrollPosition: PropTypes.any,
};

export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl("about"));
        await Promise.allSettled([
            // store.dispatch(initAbout()),
            store.dispatch(initSidebar()),
            store.dispatch(initTags()),
        ]);
    }
);

export default AboutPage;
