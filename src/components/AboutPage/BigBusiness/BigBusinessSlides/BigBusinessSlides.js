import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./style.less";

import SwipeDetector from "@helpers/slider/swipeDetector";
import SwipeDetectorMobile from "@helpers/slider/swipeDetectorMobile";
import Slider from "@helpers/slider/slider";
import SliderVideo from "@helpers/slider/sliderVideo";
import { useDispatch } from "react-redux";
import { pushSliderObject } from "@store/scrollBlocker/scrollBlockerAction";
import { useBreakpoint } from "@helpers/useBreakpoint";
import Layout from "@components/Layouts/Layout";
import Slide from "./Slide";
import SlidesAnimation from "@helpers/slider/slidesAnimation";
import { setSlidesDelayed } from "@store/about/aboutAction";

const BigBusinessSlides = (props) => {
    const dispatch = useDispatch();

    const sliderContainer = useRef();
    const video = useRef();
    const videoReverse = useRef();
    const slidesContainer = useRef();

    let sliderVideo = useRef();
    let slidesAnimation = useRef();
    let slider = useRef();
    let swipeDetector = useRef();
    let swipeDetectorMobile = useRef();
    let sliderControls = useRef();

    let [videoLoaded, setVideoLoaded] = useState(false);
    let [reversedLoaded, setReversedLoaded] = useState(false);

    const toggleVideoVisibility = (active, currentSlideIndex) => {
        if (video.current && videoReverse.current) {
            if (!active && currentSlideIndex === 0) {
                video.current.style.opacity = 0;
                videoReverse.current.style.opacity = 0;
                props.setVideoActivity(false);
            } else {
                video.current.style.opacity = 1;
                videoReverse.current.style.opacity = 1;
                props.setVideoActivity(true);
            }
        }
    };

    const onLoadedVideo = () => {
        setVideoLoaded(true);
    };

    const onLoadedReversed = () => {
        setReversedLoaded(true);
    };

    const [timerId, setTimerId] = useState();

    useEffect(() => {
        if (
            videoLoaded &&
            reversedLoaded &&
            video.current &&
            videoReverse.current
        ) {
            if (timerId !== undefined) {
                clearTimeout(timerId);
            }
            const id = setTimeout(() => {
                setupVideo();
                dispatch(setSlidesDelayed(true));
            }, 1000);
            setTimerId(id);
        }
    }, [videoLoaded, reversedLoaded, video.current, videoReverse.current]);

    let slideIndex;
    let prevSlideIndex;

    function callSlidesAnimation() {
        slideIndex = calcSlideIndex(sliderVideo.current.currentSlide);

        if (slideIndex !== prevSlideIndex) {
            if (prevSlideIndex < slideIndex) {
                slidesAnimation.current.slideNext();
            }
            if (prevSlideIndex > slideIndex) {
                slidesAnimation.current.slidePrev();
            }
        }

        prevSlideIndex = slideIndex;
    }

    const calcSlideIndex = (freezeFrameIndex) => {
        let index;

        if (freezeFrameIndex < 3) {
            index = freezeFrameIndex;
        }
        if (freezeFrameIndex === 3 || freezeFrameIndex === 4) {
            index = 3;
        }
        if (freezeFrameIndex > 4) {
            index = freezeFrameIndex - 1;
        }

        return index;
    };

    function setupVideo() {
        destroy();

        slidesAnimation.current = new SlidesAnimation(
            slidesContainer.current,
            0
        );

        sliderVideo.current = new SliderVideo(
            callSlidesAnimation,
            callSlidesAnimation,
            (playing) => {
                if (slider.current) {
                    slider.current.slideNextGuard = !playing;
                    slider.current.slidePrevGuard = !playing;
                }
            },
            [video.current, videoReverse.current],
            0,
            [0, 31/30, 63/30, 92/30, 212/30],
            "slides",
        );

        slider.current = new Slider({
            name: "slides",
            slidePrevCallback: sliderVideo.current.slidePrev.bind(
                sliderVideo.current
            ),
            slideNextCallback: sliderVideo.current.slideNext.bind(
                sliderVideo.current
            ),
            slidePrevGuard: true,
            slideNextGuard: true,
            sliderContainer: sliderContainer.current,
            slidesCount: 5,
            onCurrentSlideInited: (slide) => {
                slideIndex = slide;
                prevSlideIndex = slide;
                sliderVideo.current.setVideoToSlide(slide);
                slidesAnimation.current.setSlide(calcSlideIndex(slide));
            },
            onActiveChanged: (value) => {
                if (slider.current) {
                    toggleVideoVisibility(value, slider.current.currentSlide);
                }
            },
            onCurrentSlideChanged: (slide) => {
                if (slider.current) {
                    toggleVideoVisibility(slider.current.active, slide);
                }

                // временный фикс найзжающего видео на айфонах
                if (slide > 1) {
                    props.hideSecondPart();
                } else {
                    props.showSecondPart();
                }
            },
        });

        swipeDetector.current = new SwipeDetector(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        swipeDetectorMobile.current = new SwipeDetectorMobile(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        dispatch(pushSliderObject(slider.current));
        toggleVideoVisibility(false, slider.current.currentSlide);
    }

    useLayoutEffect(() => {
        reloadVideos();

        if (props.videos.normal && props.videos.reversed) {
            video.current.load();
            videoReverse.current.load();
        }
    }, [props.videos.normal, props.videos.reversed]);

    function destroy() {
        slidesAnimation.current?.destroy();
        sliderVideo.current?.destroy();
        slider.current?.destroy();
        swipeDetector.current?.destroy();
        swipeDetectorMobile.current?.destroy();
        sliderControls.current?.destroy();
    }

    useLayoutEffect(() => {
        return () => {
            dispatch(setSlidesDelayed(false));
            destroy();
        };
    }, []);

    useEffect(() => {
        return () => {
            clearTimeout(timerId);
        };
    }, [timerId]);

    function reloadVideos() {
        setVideoLoaded(false);
        setReversedLoaded(false);
        dispatch(setSlidesDelayed(false));
    }

    const onErrorNormal = (e) => {
        if (e.target.error?.code) {
            console.warn(
                "❌📖 ошибка в ⏩нормальном⏩ видео e.target.error:",
                e.target.error
            );
        } else {
            console.warn("❌❌❌📖 очень плохая ошибка в ⏩нормальном⏩ видео");
        }
    };

    const onErrorReversed = (e) => {
        if (e.target.error?.code) {
            console.warn(
                "❌📖 ошибка в ⏪реверснутом⏪ видео e.target.error:",
                e.target.error
            );
        } else {
            console.warn(
                "❌❌❌📖 очень плохая ошибка в ⏪реверснутом⏪ видео"
            );
        }
    };

    const breakpoint = useBreakpoint();

    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";

    return (
        <div className="sliderContainer big-business" ref={sliderContainer}>
            <div className="slider">
                <div className="video-full-screen-container">
                    {props.videos.normal && props.videos.reversed && (
                        <>
                            <video
                                muted
                                className="video"
                                ref={video}
                                onLoadedMetadata={onLoadedVideo}
                                onError={onErrorNormal}
                                playsInline
                            >
                                <source
                                    src={props.videos.normal}
                                    type="video/mp4"
                                ></source>
                            </video>

                            <video
                                muted
                                className="video"
                                ref={videoReverse}
                                onLoadedMetadata={onLoadedReversed}
                                onError={onErrorReversed}
                                playsInline
                            >
                                <source
                                    src={props.videos.reversed}
                                    type="video/mp4"
                                ></source>
                            </video>
                        </>
                    )}
                </div>

                <div className="content">
                    <Layout verticalCentered={true}>
                        <div
                            className="slide-content-wrapper slidesContainer"
                            ref={slidesContainer}
                        >
                            <div className="slide">
                                <Slide
                                    header={
                                        <React.Fragment>
                                            <span className="red">1_</span>
                                            Разрабатываем стратегии развития
                                            цифровых сервисов
                                        </React.Fragment>
                                    }
                                    text={
                                        <React.Fragment>
                                            Помогаем крупным игрокам
                                            адаптироваться к новой реальности.
                                            Исследуем рынки и потребности
                                            пользователей, находим новые
                                            возможности для роста бизнеса
                                            и сокращения издержек.
                                        </React.Fragment>
                                    }
                                    /* buttonText={"Кейсы"} */
                                />
                            </div>

                            <div className="slide">
                                <Slide
                                    header={
                                        <React.Fragment>
                                            <span className="red">2_</span>
                                            Находим людей{lg}
                                            {sm} и подключаем{maxXl}
                                            {md} в команду
                                        </React.Fragment>
                                    }
                                    text={
                                        <React.Fragment>
                                            Привлекаем ребят, желающих
                                            прокачаться. Обучаем, отправляем
                                            на проекты наших партнёров.
                                            Контролируем качество {sm}их работы
                                            и менторим, помогая развиваться.
                                        </React.Fragment>
                                    }
                                    buttonText={"Наш проект Hitch"}
                                    href={"https://hitch.expert/#top"}
                                />
                            </div>
                            <div className="slide">
                                <Slide
                                    header={
                                        <React.Fragment>
                                            <span className="red">3_</span>
                                            Обучаем внутреннюю команду
                                            и выстраиваем процессы
                                        </React.Fragment>
                                    }
                                    text={
                                        <React.Fragment>
                                            В центре экспертизы red_mad_robot
                                            помогаем решать проблемы с людьми{" "}
                                            {sm}и процессами, чтобы бизнесы
                                            развивались без дорогих ошибок.
                                        </React.Fragment>
                                    }
                                    buttonText={"Центр экспертизы Verno"}
                                    href={"https://verno.redmadrobot.com/"}
                                />
                            </div>
                            <div className="slide">
                                <Slide
                                    header={
                                        <React.Fragment>
                                            <span className="red">4_</span>
                                            Помогаем найти партнёров
                                        </React.Fragment>
                                    }
                                    text={
                                        <React.Fragment>
                                            Если нужно быстро запустить новый
                                            продукт, проще всего привлечь
                                            команду, у которой уже есть
                                            релевантный опыт. {xl}
                                            {lg}
                                            {sm}Мы поможем найти надёжных
                                            партнеров и заключить сделку.
                                        </React.Fragment>
                                    }
                                />
                            </div>
                        </div>
                    </Layout>
                </div>
            </div>
        </div>
    );
};
export default BigBusinessSlides;
